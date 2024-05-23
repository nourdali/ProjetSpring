import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffectationUserComponent } from './affectation-user/affectation-user.component';
import { MyAffectaionRoutingModule } from './my-affectation-routing.module';
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
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularSplitModule } from 'angular-split';


@NgModule({
  declarations: [
    AffectationUserComponent,
    AddReclamationComponent
  ],
  imports: [
    CommonModule,
    MyAffectaionRoutingModule,
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
    MatAutocompleteModule,
    MatTableModule,
 
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,

    AngularSplitModule,
   
  ]
})
export class MyAffectationModule { }
