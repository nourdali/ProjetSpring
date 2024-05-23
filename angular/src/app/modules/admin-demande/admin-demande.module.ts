import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDemandeComponent } from './all-demande/all-demande.component';
import { AdminDemandeRoutingModule } from './admin-demande-rounting.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    AllDemandeComponent
  ],
  imports: [
    CommonModule,
    AdminDemandeRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule
  ]
})
export class AdminDemandeModule { }
