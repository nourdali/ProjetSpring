import { StatusMaterial } from "./StatusMaterial";
import { DeviceType } from "./deviceType";

export class Device {
    id: number;
    serialNumber: string;
    deviceName: string;
    category: DeviceType;
    statut: StatusMaterial = StatusMaterial.Disponible;
   
}