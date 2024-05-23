import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeviceService } from 'src/app/core/device.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {

  typeDevices : any
  statusDevice : any
  constructor(
    private fb: FormBuilder ,
    private deviceService : DeviceService ,
    private dialogRef: MatDialogRef<EditDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit(): void {
    this.getAllTypeSevice()
    this.getAllStatusSevice()
  }

  getAllTypeSevice(){
    this.deviceService.getallTypeDevice()
    .subscribe(
      response =>  { 
        this.typeDevices = response 
      }
    )
  }
  getAllStatusSevice(){
    this.deviceService.getAllStatusDevice()
    .subscribe(
      response =>  { 
        this.statusDevice = response 
      }
    )
  }

  addressForm = this.fb.group({
    serialNumber: [this.data.serialNumber, Validators.required],
    deviceName: [this.data.deviceName, Validators.required],
    category: [this.data.category, Validators.required],
    statut: [this.data.statut, Validators.required]
  });

  onSubmit(): void {
    this.deviceService.updateDevice(this.addressForm.value , this.data.id).subscribe(
      response => {
        Swal.fire({
          title: "Succès !",
          text: "Votre matériel a été modifié avec succès.",
          icon: "success"
        }).then(
          () => this.dialogRef.close()
        )
      }
    )
  }
}
