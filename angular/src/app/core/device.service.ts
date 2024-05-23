import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  protected API_URL = environment.apiUrl
  private API_URL_DEVICE = environment.apiUrl + "/devices"
  constructor(private http: HttpClient) { }

  getallDevice() {
    return this.http.get(`${this.API_URL_DEVICE}/getAll`)
  }

  getallTypeDevice() {
    return this.http.get(`${this.API_URL_DEVICE}/get-all-deviceType`)
  }

  countByDeviceCategory() {
    return this.http.get(`${this.API_URL_DEVICE}/countByDeviceCategory`)
  }

  saveDevice(data : any) {
    return this.http.post(`${this.API_URL_DEVICE}/add` , data)
  }

  updateDevice(data : any , id : any) {
    return this.http.put(`${this.API_URL_DEVICE}/update/${id}` , data)
  }

  deleteDevice(id : any) {
    return this.http.delete(`${this.API_URL_DEVICE}/delete/${id}`)
  }

  getAllStatusDevice(){
    return this.http.get(`${this.API_URL_DEVICE}/get-all-status`)

  }
}
