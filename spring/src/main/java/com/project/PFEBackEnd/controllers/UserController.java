package com.project.PFEBackEnd.controllers;

import com.project.PFEBackEnd.detailsService.JwtService;
import com.project.PFEBackEnd.detailsService.UserInfoDetails;
import com.project.PFEBackEnd.entities.Affectation;
import com.project.PFEBackEnd.entities.AuthRequest;
import com.project.PFEBackEnd.entities.Utilisateur;
import com.project.PFEBackEnd.entities.dto.ChangePasswordDTO;
import com.project.PFEBackEnd.entities.dto.MessageDTO;
import com.project.PFEBackEnd.entities.dto.ResponseLogin;
import com.project.PFEBackEnd.entities.dto.UserDTO;
import com.project.PFEBackEnd.exceptions.DataNotFoundException;
import com.project.PFEBackEnd.repositories.UserRepository;
import com.project.PFEBackEnd.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;
    @Autowired
    PasswordEncoder passwordEncoder;


    @PostMapping("/login")
    public ResponseLogin Login(@RequestBody AuthRequest authRequest) {
        UserDetails user = userService.loadUserByUsername(authRequest.getUserName());
        if (!passwordEncoder.matches(authRequest.getPassword(), user.getPassword())) {
            throw new DataNotFoundException("Invalid Password");
        } else {
            Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
            if (authenticate.isAuthenticated()) {
                return new ResponseLogin(jwtService.generateToken(authRequest.getUserName()));
            } else {
                throw new DataNotFoundException("Invalid username or password");
            }
        }

    }

    public UserController(IUserService userService) {
        this.userService = userService;
    }


    @GetMapping(path = "/getAll")
    //@PreAuthorize("hasAuthority('USER')")
    public List<Utilisateur> getAll() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "/getManagers")
    public List<Utilisateur> getAllManegers() {
        return userService.findmanagers();
    }

    @GetMapping(path = "/getUser/{id}")
    //@PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Utilisateur> getUserById(@PathVariable Long id) {
        Utilisateur utilisateur = userService.findById(id);
        return (utilisateur == null)
                ? new ResponseEntity<Utilisateur>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<Utilisateur>(utilisateur, HttpStatus.OK);
    }


    @PostMapping(path = "/addUser")
    //@PreAuthorize("hasAuthority('ADMIN')")
    public Utilisateur addUser(@RequestBody Utilisateur user) {
        return userService.createUser(user);
    }

    @PutMapping(path = "/updateUser")
    public Utilisateur updateUser(@RequestBody Utilisateur user) {
        return userService.updateUser(user);
    }

    @DeleteMapping(path = "/deleteUser/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PutMapping(path = "/departUser/{id}")
    public Utilisateur departuser(@PathVariable Long id) {
        return userService.departUser(id);
    }

    @GetMapping("/api/user")
    public UserDTO getUserDetails(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring(7);
        String userName = jwtService.extractUserName(token);
        UserDetails userDetails = userService.loadUserByUsername(userName);
        UserInfoDetails userInfoDetails = (UserInfoDetails) userDetails;
        UserDTO utilisateur = new UserDTO();
        utilisateur.setAccess(userInfoDetails.getAccess());
        utilisateur.setId(userInfoDetails.getId());
        utilisateur.setUserName(userInfoDetails.getUsername());
        utilisateur.setEmail(userInfoDetails.getEmail());
        utilisateur.setManager(((UserInfoDetails) userDetails).getManager());
        utilisateur.setPhoneNumber(userInfoDetails.getPhoneNumber());
        utilisateur.setFirstName(userInfoDetails.getFirstName());
        utilisateur.setLastName(userInfoDetails.getLastName());
        utilisateur.setRole(userInfoDetails.getRole());
        utilisateur.setDepartureDate(userInfoDetails.getDepartureDate());
        utilisateur.setAffectations(userInfoDetails.getAffectations());
        utilisateur.setSentMessages(userInfoDetails.getSentMessages());
        utilisateur.setReceivedMessages(userInfoDetails.getReceivedMessages());

        return utilisateur;
    }

    @GetMapping("changeAccess/{idUser}/{status}")
    public Utilisateur changeAccess(@PathVariable long idUser, @PathVariable long status) {
        Utilisateur utilisateur = userRepository.findById(idUser).orElse(null);
        if (utilisateur == null) {
            return null;
        } else {
            if (status == 0) {
                utilisateur.setAccess(false);
            } else {
                utilisateur.setAccess(true);
            }
            return userRepository.save(utilisateur);
        }
    }

    @PostMapping("changePassword/{id}")
    public ResponseEntity<?> changePasword(@PathVariable long id, @RequestBody ChangePasswordDTO changePasswordDTO) {
        if (!changePasswordDTO.getPassword().equals(changePasswordDTO.getConfirmation())) {
            return ResponseEntity.badRequest().body("Confirmation incorrect.");
        }

        Utilisateur utilisateur = userRepository.findById(id).orElse(null);
        if (utilisateur == null) {
            return ResponseEntity.badRequest().body("Utilisateur non trouvé.");
        }
        utilisateur.setPassword(passwordEncoder.encode(changePasswordDTO.getPassword()));
        return ResponseEntity.ok(userRepository.save(utilisateur));

    }


    @GetMapping("countUserByStatus")
    public MessageDTO countUserByStatus(){
        Long nombre = userRepository.countUtilisateurByAccessIsFalse();
        return new MessageDTO(String.valueOf(nombre));
    }

    @GetMapping("changeAccesTotal/{status}")
    public MessageDTO changeAccesTotal(@PathVariable int status){
        List<Utilisateur> utilisateurList = userRepository.findManagersAndEmployee();
        if(status == 0){
            utilisateurList.forEach(utilisateur -> utilisateur.setAccess(false));
        }else{
            utilisateurList.forEach(utilisateur -> utilisateur.setAccess(true));
        }
        userRepository.saveAll(utilisateurList);

        return new MessageDTO("DONE");


    }
}
