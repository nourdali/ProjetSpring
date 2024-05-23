import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/core/reclamation.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.scss']
})
export class ReclamationsComponent implements OnInit {
  data:any
  displayBasic =  false
  constructor(private reclamationService : ReclamationService) { }
  listReclmation:any
  ngOnInit(): void {
    this.getAllReclamation()
  }

  getAllReclamation(){
    this.reclamationService.getAllReclmation().subscribe(res=>{
      this.listReclmation = res
      console.log(this.listReclmation);
      
    })
  }
  show(data:any){
    this.data = data
    this.displayBasic = true
  }
}
