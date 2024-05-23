import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeDeviceComponent } from './component/type-device/type-device.component';
import { TypeDeviceRoutingModule } from './type-device-rounting.module';



@NgModule({
  declarations: [
    TypeDeviceComponent
  ],
  imports: [
    CommonModule,
    TypeDeviceRoutingModule
  ]
})
export class TypeDeviceModule { }
