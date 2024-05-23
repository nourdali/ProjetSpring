import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectationComponent } from './component/affectation/affectation.component';



const routes: Routes = [
    {path : 'affectation' , component : AffectationComponent}
  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class AffectaionRoutingModule { }