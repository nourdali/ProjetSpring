import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected API_URL = environment.apiUrl
  private API_URL_DEVICE = environment.apiUrl + "/users"
  constructor(private http : HttpClient) { }


  getAllManager(){
    return this.http.get(`${this.API_URL_DEVICE}/getManagers`)
  }


  countNumberUserByStatus(): Observable<any>{
    return this.http.get<any>(`${this.API_URL_DEVICE}/countUserByStatus`)
  }

  getAllUser(){
    return this.http.get(`${this.API_URL_DEVICE}/getAll`)
  }
  changeAccess(id :any , status : any){
    return this.http.get(`${this.API_URL_DEVICE}/changeAccess/${id}/${status}`)
  }

  getCurrentUser(){
    return this.http.get(`${this.API_URL_DEVICE}/api/user`)
  }


  saveAdmin(data : any){
   
    return this.http.post(`${this.API_URL_DEVICE}/addUser` , data)
  }


  updateUser(data : any){
    return this.http.put(`${this.API_URL_DEVICE}/updateUser` , data)
  }

  deleteUser(id : any){
    return this.http.delete(`${this.API_URL_DEVICE}/deleteUser/${id}`)
  }

  chnagePassword(data : any , id : any){
    return this.http.post(`${this.API_URL_DEVICE}/changePassword/${id}` , data)
  }

  accessTotal(s : Number){
    return this.http.get(`${this.API_URL_DEVICE}/changeAccesTotal/${s}`)
  }

  
}
