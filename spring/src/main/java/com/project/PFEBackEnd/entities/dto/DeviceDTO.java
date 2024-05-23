package com.project.PFEBackEnd.entities.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.PFEBackEnd.entities.Affectation;
import com.project.PFEBackEnd.entities.Reclamation;
import com.project.PFEBackEnd.entities.Utilisateur;
import com.project.PFEBackEnd.entities.enumerations.DeviceType;
import com.project.PFEBackEnd.entities.enumerations.StatusMaterial;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DeviceDTO {

    private long id ;

    private String serialNumber;

    private String deviceName;

    private DeviceType category;


    private StatusMaterial statut;

    private Utilisateur utilisateur;






}
