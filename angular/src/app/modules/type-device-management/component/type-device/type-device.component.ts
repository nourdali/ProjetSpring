import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/core/device.service';

@Component({
  selector: 'app-type-device',
  templateUrl: './type-device.component.html',
  styleUrls: ['./type-device.component.scss']
})
export class TypeDeviceComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }
  deviceTypeList: any
  deviceList: any
  ngOnInit(): void {
   
    this.getAllDevice()
    
  }

  getAlltyeDevice() {
    this.deviceService.countByDeviceCategory()
      .subscribe(
        response => {
          this.deviceTypeList = response
          this.deviceTypeList.map(i => {
            i.dispoible = 0
            i.occupee = 0
            i.enpannes = 0

            var d = this.deviceList.filter(item => {
              return i.deviceType == item.category && item.statut == 'Disponible'
            })

            var o = this.deviceList.filter(item => {
              return i.deviceType == item.category && item.statut == 'OCCUPEE'
            })

            var p = this.deviceList.filter(item => {
              return i.deviceType == item.category && item.statut == 'EN_PANNE'
            })
            i.dispoible = d.length
            i.occupee = o.length
            i.enpannes = p.length
            
          })
          console.log(this.deviceTypeList);



        }
      )
  }

  getAllDevice() {
    this.deviceService.getallDevice().subscribe(res => {
      this.deviceList = res
      this.getAlltyeDevice()

    })
  }






}
