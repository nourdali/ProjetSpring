import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http : HttpClient) { }

  getAllHistorique(){
    return this.http.get("http://localhost:8081/history/getAll")
  }
}
