import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LaoutRoutingModule } from './layout-routing.module';
import {MatBadgeModule} from '@angular/material/badge';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderNotificationComponent } from './header-notification/header-notification.component';
import { NavbarV2Component } from './navbar-v2/navbar-v2.component';
import { AngularSplitModule } from 'angular-split';
import { NavSplitComponent } from './nav-split/nav-split.component';
import { ChangePasswordComponent } from 'src/app/modules/auth/components/change-password/change-password.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderNotificationComponent,
    NavbarV2Component,
    NavSplitComponent,
    ChangePasswordComponent
        
  ],
  imports: [
    CommonModule,
    LaoutRoutingModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    AngularSplitModule,
    FormsModule
    
  ]
})
export class LayouttModule { }
