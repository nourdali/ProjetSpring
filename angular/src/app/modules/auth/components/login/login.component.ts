import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { UserService } from 'src/app/core/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : any
  password : any
  userCurrent : any
  constructor(
    private authService : AuthService ,
    private userService : UserService ,
    private router : Router
    ) { }
  loginResponse : any
  ngOnInit(): void {
  }

  onLogin(){
    this.authService.login({userName : this.username , password : this.password}).subscribe(res=>{
      console.log(res);
      this.loginResponse = res
      localStorage.setItem('token' ,this.loginResponse.accessToken )
      this.userService.getCurrentUser().subscribe(response=> {
        console.log(response)
        this.userCurrent = response
        if(this.userCurrent.role == "ADMIN"){
          this.router.navigateByUrl('admin/liste-user')
        }else{
          this.router.navigateByUrl("admin/my-devices")
        }
      })
      
      
    })
  }

}
