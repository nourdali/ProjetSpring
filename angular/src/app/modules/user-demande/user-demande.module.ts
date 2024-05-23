import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDemandeComponent } from './add-demande/add-demande.component';
import { UserDemandeRoutingModule } from './user-demande-rounting.module';
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


@NgModule({
  declarations: [
    AddDemandeComponent
  ],
  imports: [
    CommonModule,
    UserDemandeRoutingModule,
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
    ReactiveFormsModule,
    MatCardModule,
    MatAutocompleteModule
  ]
})
export class UserDemandeModule { }
