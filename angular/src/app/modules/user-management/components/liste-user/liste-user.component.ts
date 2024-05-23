import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogViewUserComponent } from '../dialog-view-user/dialog-view-user.component';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/core/user.service';
import { EditDeviceComponent } from 'src/app/modules/device-management/component/edit-device/edit-device.component';
import { AffectManagerComponent } from '../affect-manager/affect-manager.component';




@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  managers: any
  dialogRefEdit: MatDialogRef<DialogEditUserComponent>;
  dialogRefAdd: MatDialogRef<DialogAddUserComponent>;
  dialogRefAff: MatDialogRef<AffectManagerComponent>;
  userList: any
  searchTerm:any
  constructor(
    private dialog: MatDialog,
    private userService: UserService
  ) { }
  numberUserWithNoAccess:any
  ngOnInit(): void {
    this.countNumberUserWithNoAccess()
    this.getAllUser()
  }

  countNumberUserWithNoAccess(){
    this.userService.countNumberUserByStatus().subscribe(res=>{
      this.numberUserWithNoAccess = res.message
    })
  }

  getAllUser() {
    this.userService.getAllUser().subscribe(res => {
      this.userList = res
     
      console.log(this.userList);

    })
  }


  openDialogAddUser() {
    this.dialogRefAdd = this.dialog.open(DialogAddUserComponent, {
    });
    this.dialogRefAdd.afterClosed().subscribe(result => {
      this.getAllUser()
      this.countNumberUserWithNoAccess()
    });
  }

  openDialogEditUser(data: any) {
    this.dialogRefEdit = this.dialog.open(DialogEditUserComponent, {
      data: data
    });
    this.dialogRefEdit.afterClosed().subscribe(result => {
      this.getAllUser()
      this.countNumberUserWithNoAccess()
    });
  }


  openDialogAffectManager(data: any) {
    this.dialogRefAff = this.dialog.open(AffectManagerComponent, {
      data: data
    });
    this.dialogRefAff.afterClosed().subscribe(result => {
      this.getAllUser()
      this.countNumberUserWithNoAccess()
    });
  }



  openDialogViewUser() {
    this.dialog.open(DialogViewUserComponent, {
      maxHeight: '80vh'
    });
  }

  filterItems() {
    this.userService.getAllUser()
      .subscribe(
        response => {
          this.userList = response
          this.userList = this.userList.filter(item => {
            return (item.firstName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) || (item.lastName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) || (item.userName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1)
          }
            
          );
        }
      )

  }
  accessTotal(s:Number){
    Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, changer !"
    }).then((result) => {

      if (result.isConfirmed) {
        this.userService.accessTotal(s).subscribe(res => {
          Swal.fire({
            title: "Changé !",
            text: "l'accès a été changé.",
            icon: "success"
          }).then(()=>{
            this.getAllUser()
            this.countNumberUserWithNoAccess()
          })
        })

      }
    });

  }

  onDeleteUser(id: any) {
    Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !"
    }).then((result) => {

      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "Votre utilisateur a été supprimé.",
            icon: "success"
          }).then(()=>{
            this.getAllUser()
            this.countNumberUserWithNoAccess()
          })
        })

      }
    });

  }


  changeStatus(id:any , status){
    Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, changer !"
    }).then((result) => {

      if (result.isConfirmed) {
        this.userService.changeAccess(id , status).subscribe(res => {
          Swal.fire({
            title: "Changé !",
            text: "l'accès a été changé.",
            icon: "success"
          }).then(()=>{
            this.getAllUser()
            this.countNumberUserWithNoAccess()
          })
        })

      }
    });
  }


}
