import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ReclamationService } from 'src/app/core/reclamation.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.scss']
})
export class AddReclamationComponent implements OnInit {

  constructor(
    private fb: FormBuilder ,
    private dialogRef: MatDialogRef<AddReclamationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reclamationService : ReclamationService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  addForm = this.fb.group({
    titre: ["", Validators.required],
    description: ["", Validators.required],

  });

  onSubmit(){
    this.reclamationService
    .addReclamationService(this.addForm.value , this.data.user.id , this.data.device.id)
    .subscribe(res=>{
      console.log(res);
      Swal.fire({
        title: "Succès !",
        text: "Votre reclamation a été ajouté avec succès.",
        icon: "success"
      }).then(
        () => this.dialogRef.close()
      )
      
    })
  }

}
