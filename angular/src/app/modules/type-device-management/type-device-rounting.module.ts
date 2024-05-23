import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeDeviceComponent } from './component/type-device/type-device.component';

const routes: Routes = [
  { path: 'liste-type-device', component: TypeDeviceComponent },
  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class TypeDeviceRoutingModule { }