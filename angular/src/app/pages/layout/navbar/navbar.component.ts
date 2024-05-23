import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: any
  screenWidth!: number;

  public isExpanded: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router : Router
  ) {
    this.getScreenSize();
  }
  ngOnInit(): void {
    this.getCurrentUser()
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    // console.log(this.screenWidth);     
    if (this.screenWidth <= 959) {
      this.isExpanded = true;
    } else {
      this.isExpanded = false;
    }
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(res => {
      this.currentUser = res
      console.log(this.currentUser)
    })
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigateByUrl("auth/login")
  }

}
