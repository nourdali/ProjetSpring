import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from 'src/app/core/historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  allHistorique:any
  constructor(
    private historiqueService : HistoriqueService
  ) { }

  ngOnInit(): void {
    this.getAllHistorique()
  }

  getAllHistorique(){
    this.historiqueService.getAllHistorique().subscribe(res=>{
      this.allHistorique = res
      console.log(res);
      
    })
  }

}
