package com.project.PFEBackEnd.services;

import com.project.PFEBackEnd.entities.Affectation;
import com.project.PFEBackEnd.entities.Device;
import com.project.PFEBackEnd.entities.dto.DeviceCount;
import com.project.PFEBackEnd.entities.dto.DeviceDTO;
import com.project.PFEBackEnd.entities.enumerations.DeviceType;
import com.project.PFEBackEnd.exceptions.DataNotFoundException;
import com.project.PFEBackEnd.exceptions.DeviceExisteWithSerialNumberException;
import com.project.PFEBackEnd.repositories.AffectationRepository;
import com.project.PFEBackEnd.repositories.DeviceRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DeviceServiceImpl implements IDeviceService {
    private final DeviceRepository deviceRepository;
    private final AffectationRepository affectationRepository;

    public DeviceServiceImpl(DeviceRepository deviceRepository, AffectationRepository affectationRepository) {
        this.deviceRepository = deviceRepository;
        this.affectationRepository = affectationRepository;
    }


    public Affectation getAffectByDevice(long id) {
        return affectationRepository.findByDeviceId(id);
    }


    @Override
    public List<DeviceDTO> getAllDevices() {
        List<Device> deviceList = deviceRepository.findAll();
        List<DeviceDTO> deviceDTOList = new ArrayList<>() {
        };
        for (Device device : deviceList) {
            Affectation affectation = getAffectByDevice(device.getId());
            DeviceDTO deviceDTO = new DeviceDTO();
            if (affectation != null) {
                deviceDTO.setUtilisateur(affectation.getUtilisateur());
            }

            deviceDTO.setId(device.getId());
            deviceDTO.setDeviceName(device.getDeviceName());
            deviceDTO.setCategory(device.getCategory());
            deviceDTO.setStatut(device.getStatut());
            deviceDTO.setSerialNumber(device.getSerialNumber());

            deviceDTOList.add(deviceDTO);


        }

        return deviceDTOList;
    }

    @Override
    public Device createDevice(Device device) {
        Device device1 = deviceRepository.getDeviceBySerialNumber(device.getSerialNumber());
        if (device1 != null) {
            throw new DeviceExisteWithSerialNumberException("Device with this serial Number already exist");
        } else {
            return deviceRepository.save(device);
        }

    }

    @Override
    public Device updateDevice(Device device, long id) {
        Device existingDevice = deviceRepository.findById(id).orElse(null);
        if (existingDevice == null) {
            throw new DataNotFoundException("Device not found");
        } else {
            existingDevice.setSerialNumber(device.getSerialNumber());
            existingDevice.setDeviceName(device.getDeviceName());
            existingDevice.setCategory(device.getCategory());
            existingDevice.setStatut(device.getStatut());
            return deviceRepository.save(existingDevice);

        }
    }

    @Override
    public void deleteDevice(Long id) {
        deviceRepository.deleteById(id);
    }

    @Override
    public Device findById(Long id) {
        return deviceRepository.findById(id).orElse(null);
    }

    @Override
    public List<DeviceCount> getCountByCategories() {
        List<Object[]> results = deviceRepository.countDevicesByCategory();

        Map<DeviceType, Integer> deviceCounts = new HashMap<>();
        for (Object[] result : results) {
            DeviceType category = DeviceType.valueOf(((DeviceType) result[0]).name());
            Long count = (Long) result[1];
            deviceCounts.put(category, count.intValue());
        }


        for (DeviceType type : DeviceType.values()) {
            deviceCounts.putIfAbsent(type, 0);
        }

        List<DeviceCount> deviceCountList = new ArrayList<>();


        for (Map.Entry<DeviceType, Integer> entry : deviceCounts.entrySet()) {
            DeviceCount deviceCount = new DeviceCount(entry.getKey(), entry.getValue());
            deviceCountList.add(deviceCount);
        }

        return deviceCountList;
    }
}
