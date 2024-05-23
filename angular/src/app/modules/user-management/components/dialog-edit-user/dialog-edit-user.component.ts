import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user.service';
import Swal from 'sweetalert2';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder ,
    private userService  : UserService ,
    private dialogRef: MatDialogRef<DialogEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}


  managers: any
  ngOnInit(): void {
    console.log(this.data)
    this.getAllManager()
  }




  getAllManager() {
    this.userService.getAllManager().subscribe(res => {
      this.managers = res
    })
  }

  addForm = this.fb.group({
    id: [this.data.id, Validators.required],
    userName: [this.data.userName, Validators.required],
    firstName: [this.data.firstName, Validators.required],
    lastName: [this.data.lastName, Validators.required],
    email: [this.data.email, Validators.required],
    phoneNumber: [this.data.phoneNumber, Validators.required],
    manager: [this.data.manager]
    

  });

  onSubmit(): void {

    console.log(this.addForm.value)
    this.userService.updateUser(this.addForm.value).subscribe(
      response => {
        Swal.fire({
          title: "Succès !",
          text: "Votre utilisateur a été ajouté avec succès.",
          icon: "success"
        }).then(
          () => this.dialogRef.close()
        )
      }
    )
  }



}
