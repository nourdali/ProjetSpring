import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogAddUserComponent>,
    private userService: UserService
  ) { }


  managers: any
  ngOnInit(): void {
    this.getAllManager()
  }




  getAllManager() {
    this.userService.getAllManager().subscribe(res => {
      this.managers = res
    })
  }

  addForm = this.fb.group({
    userName: ["", Validators.required],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],

    password: ["", Validators.required],
    role: ["MANAGER", Validators.required],
  });

  onSubmit(): void {

    console.log(this.addForm.value)

    this.userService.saveAdmin(this.addForm.value).subscribe(
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
