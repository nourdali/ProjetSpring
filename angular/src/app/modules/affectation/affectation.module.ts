import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffectationComponent } from './component/affectation/affectation.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AffectaionRoutingModule } from './affectation-rounting.module';

@NgModule({
  declarations: [
    AffectationComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule,
    MatButtonModule,
    FormsModule,
    AffectaionRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatAutocompleteModule
  ]
})
export class AffectationModule { }
