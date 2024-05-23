import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DemandeService } from 'src/app/core/demande.service';
import { DeviceService } from 'src/app/core/device.service';
import { UserService } from 'src/app/core/user.service';
@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.scss']
})
export class AddDemandeComponent implements OnInit {
  userConnect: any
  selectedOption: string;
  options: any
  mesdemande : any
  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private userService: UserService,
    private demandeService: DemandeService
  ) { }



  addForm = this.fb.group({
    titre: ["", Validators.required],
    description: ["", Validators.required],
    deviceType: [""]
  });

  ngOnInit(): void {
    this.getCurrentUser()
    this.getTypeDevice()
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(res => {
      this.userConnect = res
      this.demandeService.getAllDemandesByUser(this.userConnect.id).subscribe(res=>{
        this.mesdemande = res
      })
    })
  }

  getTypeDevice() {
    this.deviceService.getallTypeDevice().subscribe(res => {
      this.options = res
    })
  }

  


  onSubmit() {

    console.log(this.selectedOption);
    this.addForm.value.deviceType = this.selectedOption
    console.log(this.addForm.value);
    this.demandeService.saveDamende(this.addForm.value, this.userConnect.id).subscribe(res => {
      window.location.reload()
    })


  }






}
