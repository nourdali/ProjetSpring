package com.project.PFEBackEnd.entities.dto;

import com.project.PFEBackEnd.entities.enumerations.DeviceType;

public class DeviceCount {
    private DeviceType deviceType;
    private int count;

    public DeviceCount(DeviceType deviceType, int count) {
        this.deviceType = deviceType;
        this.count = count;
    }


    public DeviceType getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(DeviceType deviceType) {
        this.deviceType = deviceType;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
