import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { AllReclamationsRoutingModule } from './all-reclamations-rounting.module';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ReclamationsComponent
  ],
  imports: [
    CommonModule,
    AllReclamationsRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule
  ]
})
export class AllReclamationsModule { }
