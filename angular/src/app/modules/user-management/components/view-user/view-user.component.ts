import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user.service';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userConnect : any
  dialogRefEdit: MatDialogRef<DialogEditUserComponent>;
  constructor(
    private userService : UserService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(res=>{
      this.userConnect = res
      console.log(this.userConnect)
    })
  }

  openDialogEditUser(data: any) {
    this.dialogRefEdit = this.dialog.open(DialogEditUserComponent, {
      data: data
    });
    this.dialogRefEdit.afterClosed().subscribe(result => {
      this.getCurrentUser()
    });
  }


  /*** Animation Task Number ***/
  taskcount:number=0; 
  taskcountstop:any = setInterval(()=>{
    this.taskcount++;
    if(this.taskcount == 145)
    {
      clearInterval(this.taskcountstop);
    }
  },10)
  /******/
  processed:number=0; 
  processedstop:any = setInterval(()=>{
    this.processed++;
    if(this.processed == 75)
    {
      clearInterval(this.processedstop);
    }
  },10)
  /******/
  completed:number=0; 
  completedstop:any = setInterval(()=>{
    this.completed++;
    if(this.completed == 70)
    {
      clearInterval(this.completedstop);
    }
  },10)

}
