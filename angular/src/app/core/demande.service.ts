import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  protected API_URL = environment.apiUrl
  private API_URL_DEVICE = environment.apiUrl + "/request"
  constructor(private http : HttpClient) { }

  getAllDemandes(){
    return this.http.get(`${this.API_URL_DEVICE}/getAll`)
  }

  saveDamende(data:any , id:any){
    return this.http.post(`${this.API_URL_DEVICE}/createRequest/${id}` , data)
  }

  getAllDemandesByUser(id:any){
    return this.http.get(`${this.API_URL_DEVICE}/getAllByUser/${id}`)
  }
}
