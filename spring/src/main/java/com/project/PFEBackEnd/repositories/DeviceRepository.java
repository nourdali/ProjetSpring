package com.project.PFEBackEnd.repositories;

import com.project.PFEBackEnd.entities.Device;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface DeviceRepository extends JpaRepository<Device,Long> {
/*    @Query("SELECT d.category, COUNT(d) FROM Device d GROUP BY d.category")
    List<Object[]> countDevicesByCategory();*/

    @Query("SELECT d.category AS category, COUNT(d.id) AS deviceCount " +
            "FROM Device d " +
            "GROUP BY d.category")
    List<Object[]> countDevicesByCategory();

    Device getDeviceBySerialNumber(String serialNumber);

    @Query("SELECT d FROM Device d , Affectation a WHERE d.id = a.device.id AND a.utilisateur.id = :id")
    List<Device> findDevicesByUserId(long id);
}
