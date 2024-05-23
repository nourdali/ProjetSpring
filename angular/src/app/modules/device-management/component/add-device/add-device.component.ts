import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DeviceService } from 'src/app/core/device.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  typeDevices: any
  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private dialogRef: MatDialogRef<AddDeviceComponent>
  ) { }

  ngOnInit(): void {
    this.getAllTypeSevice()
  }

  getAllTypeSevice() {
    this.deviceService.getallTypeDevice()
      .subscribe(
        response => {
          this.typeDevices = response
        }
      )
  }

  addressForm = this.fb.group({
    serialNumber: [null, Validators.required],
    deviceName: [null, Validators.required],
    category: [null, Validators.required],
  });

  onSubmit(): void {
    this.deviceService.saveDevice(this.addressForm.value).subscribe(
      response => {
        Swal.fire({
          title: "Succès !",
          text: "Votre matériel a été ajouté avec succès.",
          icon: "success"
        }).then(
          () => this.dialogRef.close()
        )
      }
    )
  }

}
