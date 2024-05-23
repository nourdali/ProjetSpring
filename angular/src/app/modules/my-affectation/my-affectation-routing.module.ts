import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectationUserComponent } from './affectation-user/affectation-user.component';



const routes: Routes = [
    {path : 'my-devices' , component : AffectationUserComponent}
  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class MyAffectaionRoutingModule { }