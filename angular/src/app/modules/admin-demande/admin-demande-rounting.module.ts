import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDemandeComponent } from './all-demande/all-demande.component';



const routes: Routes = [
    {path : 'all-demandes' , component : AllDemandeComponent}
  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class AdminDemandeRoutingModule { }