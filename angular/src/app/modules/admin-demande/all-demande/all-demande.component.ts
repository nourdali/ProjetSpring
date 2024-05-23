import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/core/demande.service';

@Component({
  selector: 'app-all-demande',
  templateUrl: './all-demande.component.html',
  styleUrls: ['./all-demande.component.scss']
})
export class AllDemandeComponent implements OnInit {
  demandes:any
  data:any
  displayBasic =  false
  constructor(
    private demandeService : DemandeService
  ) { }

  ngOnInit(): void {
    this.demandeService.getAllDemandes().subscribe(res=>{
      this.demandes = res
      console.log(res);
      
    })
  }

  show(data:any){
    this.data = data
    this.displayBasic = true
  }

}
