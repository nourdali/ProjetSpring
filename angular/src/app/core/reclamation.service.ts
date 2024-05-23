import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  protected API_URL = environment.apiUrl
  private API_URL_DEVICE = environment.apiUrl + "/reclamation"
  constructor(private http : HttpClient) { }


  addReclamationService(data:any , idUser : any , idDevice :any){
    return this.http.post(`${this.API_URL_DEVICE}/addReclamation/${idUser}/${idDevice}` , data)
  }


  getreclationService(idUser : any ){
    return this.http.get(`${this.API_URL_DEVICE}/getByUser/${idUser}` )
  }

  getAllReclmation(){
    return this.http.get(`${this.API_URL_DEVICE}/getAll` )
  }
}
