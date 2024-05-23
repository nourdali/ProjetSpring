import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  password : any
  confirmation : any
  user:any
  constructor(
    private userService : UserService,
    private routre : Router
  ) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(res=>{
      this.user = res
    })
  }

  changePassword(){
    const obj = {
      "password": this.password,
      "confirmation": this.confirmation
    }
    this.userService.chnagePassword(obj , this.user?.id).subscribe(res=>{
      localStorage.removeItem("token")
      this.routre.navigateByUrl("auth/login")
    })

  }

}
