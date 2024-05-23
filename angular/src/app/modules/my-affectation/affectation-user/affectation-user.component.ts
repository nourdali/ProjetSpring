import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user.service';
import { AddReclamationComponent } from '../add-reclamation/add-reclamation.component';
import { ReclamationService } from 'src/app/core/reclamation.service';
import { EditDeviceComponent } from '../../device-management/component/edit-device/edit-device.component';

@Component({
  selector: 'app-affectation-user',
  templateUrl: './affectation-user.component.html',
  styleUrls: ['./affectation-user.component.scss']
})
export class AffectationUserComponent implements OnInit {
  currentUser: any
  dialogRefAdd: MatDialogRef<AddReclamationComponent>;
  dialogRefEdit: MatDialogRef<EditDeviceComponent>;
  reclamationList:any
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private reclamationService : ReclamationService
  ) { }

  ngOnInit(): void {
    this.getUserInfo()
    
  }

  getUserInfo() {
    this.userService.getCurrentUser().subscribe(res => {
      this.currentUser = res
      console.log('---', this.currentUser)
      this.getMyReclamation()
    })
  }

  getMyReclamation(){
    this.reclamationService.getreclationService(this.currentUser?.id).subscribe(res=>{
      this.reclamationList = res
      console.log(this.reclamationList);
      
    })
  }

  openDialogAddUser(device: any, user: any) {
    const data = {
      device: device,
      user: user
    }
    this.dialogRefAdd = this.dialog.open(AddReclamationComponent, {
      data: data
    });
    this.dialogRefAdd.afterClosed().subscribe(result => {

    });
  }

  openDialogEditdevice(device:any){
    console.log(device)
   
    this.dialogRefEdit = this.dialog.open(EditDeviceComponent, {
      data: device
    });
    this.dialogRefEdit.afterClosed().subscribe(result => {

    });

  }

}
