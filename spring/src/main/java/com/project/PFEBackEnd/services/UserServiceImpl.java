package com.project.PFEBackEnd.services;


import com.project.PFEBackEnd.detailsService.UserInfoDetails;
import com.project.PFEBackEnd.entities.Device;
import com.project.PFEBackEnd.entities.HistoriqueUpdateUserDetails;
import com.project.PFEBackEnd.entities.Utilisateur;
import com.project.PFEBackEnd.entities.enumerations.StatusMaterial;
import com.project.PFEBackEnd.exceptions.DataNotFoundException;
import com.project.PFEBackEnd.repositories.DeviceRepository;
import com.project.PFEBackEnd.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService, UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private IHistoryService historyService;
    @Autowired
   DeviceRepository deviceRepository;


    @Override
    public List<Utilisateur> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Utilisateur createManager(Utilisateur user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setAccess(false);
        return userRepository.save(user);
    }

    @Override
    public Utilisateur createUser( Utilisateur user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public Utilisateur updateUser(Utilisateur user) {

        Utilisateur utilisateur = findById(user.getId());


        if (utilisateur != null) {
            HistoriqueUpdateUserDetails history = new HistoriqueUpdateUserDetails();
            history.setUserName(utilisateur.getUserName());
            history.setFirstName(utilisateur.getFirstName());
            history.setLastName(utilisateur.getLastName());
            history.setEmail(utilisateur.getEmail());
            history.setPhoneNumber(utilisateur.getPhoneNumber());

            history.setManager(utilisateur.getManager());
            history.setHiringDate(utilisateur.getHiringDate());
            history.setRole(utilisateur.getRole());
            //



            utilisateur.setUserName(user.getUserName());
            utilisateur.setFirstName(user.getFirstName());
            utilisateur.setLastName(user.getLastName());
            utilisateur.setEmail(user.getEmail());
            utilisateur.setPhoneNumber(user.getPhoneNumber());
            utilisateur.setManager(user.getManager());





            userRepository.save(utilisateur);
            historyService.addHistory(user.getId(), history);
            return utilisateur;

        } else {

            throw new RuntimeException("User does not exist");
        }
    }

    @Override
    public Utilisateur departUser(Long idUser) {
        Utilisateur existingUser = userRepository.findById(idUser).orElse(null);
        if (existingUser == null) {
            throw new DataNotFoundException("User not found");
        }
        existingUser.setDepartureDate(LocalDateTime.now());
        return userRepository.save(existingUser);
    }

    @Override
    @Transactional
    public void deleteUser(Long id) {
        List<Device> deviceList = deviceRepository.findDevicesByUserId(id);

        if(!deviceList.isEmpty()){
            deviceList.forEach(device -> device.setStatut(StatusMaterial.Disponible));
            deviceRepository.saveAll(deviceList);
        }

        List<Utilisateur> utilisateurList = userRepository.findUtilisateursByManager(findById(id));
        if(!utilisateurList.isEmpty()){
            utilisateurList.forEach(utilisateur -> utilisateur.setManager(null));
            userRepository.saveAll(utilisateurList);
        }


        userRepository.deleteById(id);

    }

    @Override
    public Utilisateur findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws DataNotFoundException {
        Optional<Utilisateur> userInfo = userRepository.findByUserName(username);
        return userInfo.map(UserInfoDetails::new)
                .orElseThrow(() -> new DataNotFoundException("User not found: " + username));
    }

    @Override
    public List<Utilisateur> findmanagers() {
        return userRepository.findManagers();
    }


}
