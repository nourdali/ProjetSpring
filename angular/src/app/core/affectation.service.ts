import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  protected API_URL = environment.apiUrl
  private API_URL_DEVICE = environment.apiUrl + "/affectation"
  constructor(private http: HttpClient) { }

  affecetService(user :any , device : any) {
    return this.http.get(`${this.API_URL_DEVICE}/addV1/${user}/${device}`)
  }

  getAllAffecetService() {
    return this.http.get(`${this.API_URL_DEVICE}/getAll`)
  }


}
