import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { AffectationService } from 'src/app/core/affectation.service';
import { DeviceService } from 'src/app/core/device.service';
import { UserService } from 'src/app/core/user.service';
@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.scss']
})
export class AffectationComponent implements OnInit {
  myControl = new FormControl();
  myControlUser = new FormControl();
  usersList: any = []
  device: any = []
  userInput : any
  deviceList: any = []
  myObjects: any[] = [
    { "id": 1, "name": "Objet 1" },
    { "id": 2, "name": "Objet 2" },
    { "id": 3, "name": "Objet 3" }
  ];;
  filteredObjects: Observable<any[]>;
  filteredObjectsUser: Observable<any[]>;
  listAffectations :any
  constructor(
    private userService: UserService,
    private deviceService: DeviceService,
    private affectationService : AffectationService
  ) { }


  ngOnInit(): void {
    this.getAllDevice()
    this.getAllUsers()
    this.getAllAffectaion()

  }

  optionSelected(option: any) {
    console.log('Option sélectionnée :', this.device);
    // Faites ce que vous voulez avec l'option sélectionnée ici
  }

  getAllAffectaion(){
    this.affectationService.getAllAffecetService().subscribe(res=>{
      this.listAffectations = res
      this.listAffectations.reverse()
      console.log(this.listAffectations);
      
    })
  }

  getAllUsers() {
    this.userService.getAllUser().subscribe(res => {
      this.usersList = res
      console.log(this.usersList);
      this.filteredObjectsUser = this.myControlUser.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          console.log("**");

          return this._filterUser(value)
        })
      );

    })
  }

  getAllDevice() {
    this.deviceService.getallDevice().subscribe(res => {
      this.deviceList = res
      this.deviceList = this.deviceList.filter(i=> i.statut == "Disponible" )
      console.log(this.deviceList);
      this.filteredObjects = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => {
            console.log("**");

            return this._filter(value)
          })
        );

    })
  }

  private _filter(value: string | any): any[] {
    const filterValue = (typeof value === 'string') ? value.toLowerCase() : value.deviceName.toLowerCase();

    return this.deviceList.filter((object: any) => {
      if (object.deviceName.toLowerCase().includes(filterValue) || object.serialNumber.toLowerCase().includes(filterValue)) {
        return object
      }
    })
  }

  private _filterUser(value: string | any): any[] {
    const filterValue = (typeof value === 'string') ? value.toLowerCase() : value.firstName.toLowerCase();
    console.log("*-<")
    return this.usersList.filter((object: any) => {
      if (object.firstName.toLowerCase().includes(filterValue) || object.lastName.toLowerCase().includes(filterValue) || object.userName.toLowerCase().includes(filterValue)) {
        return object
      }
    })
  }


  onSubmit(): void {
    console.log('Option sélectionnée :', this.device);
    console.log('Option sélectionnée :', this.userInput);
    this.affectationService.affecetService(this.userInput , this.device).subscribe(res=>{
      console.log(res);
   
      
    })
  }
  list:any = []
  addDvice(data:any){


  }

}








