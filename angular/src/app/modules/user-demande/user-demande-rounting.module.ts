import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDemandeComponent } from './add-demande/add-demande.component';



const routes: Routes = [
    {path : 'mes-demandes' , component : AddDemandeComponent}
  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class UserDemandeRoutingModule { }