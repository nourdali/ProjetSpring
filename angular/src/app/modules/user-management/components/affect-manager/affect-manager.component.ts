import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affect-manager',
  templateUrl: './affect-manager.component.html',
  styleUrls: ['./affect-manager.component.scss']
})
export class AffectManagerComponent implements OnInit {

  constructor(
    private fb: FormBuilder ,
    private userService  : UserService ,
    private dialogRef: MatDialogRef<AffectManagerComponent>,
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
    id: [this.data.id],
    userName: [this.data.userName],
    firstName: [this.data.firstName],
    lastName: [this.data.lastName],
    email: [this.data.email],
    phoneNumber: [this.data.phoneNumber],
    manager: [null, Validators.required]
    

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
