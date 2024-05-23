package com.project.PFEBackEnd.services;

import com.project.PFEBackEnd.entities.Device;
import com.project.PFEBackEnd.entities.Utilisateur;
import com.project.PFEBackEnd.entities.dto.DeviceCount;
import com.project.PFEBackEnd.entities.dto.DeviceDTO;
import com.project.PFEBackEnd.entities.enumerations.DeviceType;

import java.util.List;
import java.util.Map;

public interface IDeviceService {
    List<DeviceDTO> getAllDevices();
    Device createDevice(Device device);
    Device updateDevice(Device device , long id);
    void deleteDevice(Long id);
    Device findById(Long id);
    List<DeviceCount> getCountByCategories();
}
