import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './component/device/device.component';

const routes: Routes = [
  { path: 'liste-device', component: DeviceComponent },
  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class DeviceManagementRoutingModule { }