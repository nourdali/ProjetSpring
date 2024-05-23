import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavSplitComponent } from './nav-split/nav-split.component';
import { NavbarV2Component } from './navbar-v2/navbar-v2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangePasswordComponent } from 'src/app/modules/auth/components/change-password/change-password.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../modules/user-management/user-management.module').then((m) => m.UserManagementModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/device-management/device-management.module').then((m) => m.DeviceManagementModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/historique/historique.module').then((m) => m.HistoriqueModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/type-device-management/type-device.module').then((m) => m.TypeDeviceModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/user-demande/user-demande.module').then((m) => m.UserDemandeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/admin-demande/admin-demande.module').then((m) => m.AdminDemandeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/admin-reclamation/all-reclamations.module').then((m) => m.AllReclamationsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/affectation/affectation.module').then((m) => m.AffectationModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/my-affectation/my-affectation.module').then((m) => m.MyAffectationModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/notification/notification.module').then((m) => m.NotificationModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/cards/cards.module').then((m) => m.CardsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/form/form.module').then((m) => m.FormModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/timeline/timeline.module').then((m) => m.TimelineModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/steppers/steppers.module').then((m) => m.SteppersModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/workflow/workflow.module').then((m) => m.WorkflowModule),
      },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },
  {
    path: 'nav2', component: NavbarV2Component,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../modules/user-management/user-management.module').then((m) => m.UserManagementModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/notification/notification.module').then((m) => m.NotificationModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/cards/cards.module').then((m) => m.CardsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/form/form.module').then((m) => m.FormModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/timeline/timeline.module').then((m) => m.TimelineModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/steppers/steppers.module').then((m) => m.SteppersModule),
      },
    ],
  },
  {
    path: 'nav-split', component: NavSplitComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaoutRoutingModule { }
