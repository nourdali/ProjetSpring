import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { DeviceService } from 'src/app/core/device.service';
import Swal from 'sweetalert2';
import { EditDeviceComponent } from '../edit-device/edit-device.component';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  table = [
    ['John Doe', 'john@example.com', 'USA'],
    ['Jane Smith', 'jane@example.com', 'Canada'],
  ]
  datePipe = new DatePipe('en-US');
  devicesList: any
  dialogRefAdd: MatDialogRef<AddDeviceComponent>;
  dialogRefEdit: MatDialogRef<EditDeviceComponent>;
  searchTerm: any
  constructor(
    private dialog: MatDialog,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getAllDevice()
  }

  getAllDevice() {
    this.deviceService.getallDevice()
      .subscribe(
        response => {
          this.devicesList = response
          console.log(response)
        }
      )
  }

  downloadPdf() {
    
    const doc = new jsPDF('portrait', 'px', 'a4') as jsPDFWithPlugin;
    let arrayOfArrays = this.devicesList.map(obj => [ obj.deviceName ,obj.serialNumber,obj.category,obj.statut,obj.utilisateur?.firstName]);
    doc.autoTable({
      head: [['Label', 'Référence', 'Type' , 'Status' , 'Reservé par' ]],
      body: arrayOfArrays
    });

    doc.save('table.pdf');

  }

  exportexcel(): void {
    let arrayOfArrays = this.devicesList.map(obj => [ obj.deviceName ,obj.serialNumber,obj.category,obj.statut,obj.utilisateur?.firstName]);

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(arrayOfArrays);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    let date = this.datePipe.transform(new Date(), 'dd-MM-yyyy_HH:mm:ss');
    console.log(wb);
    XLSX.writeFile(wb, "ecxel" + '_' + date + '.xlsx');
  }

  deleteDevice(id: any) {
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
        this.deviceService.deleteDevice(id).subscribe(res => {
          Swal.fire({
            title: "Supprimé !",
            text: "Votre matériel a été supprimé.",
            icon: "success"
          }).then(() => this.getAllDevice())
        })

      }
    });
  }


  openDialogAddDevice() {
    this.dialogRefAdd = this.dialog.open(AddDeviceComponent, {
    });

    this.dialogRefAdd.afterClosed().subscribe(result => {
      this.getAllDevice()
    });
  }


  openDialogEditDevice(data: any) {
    this.dialogRefEdit = this.dialog.open(EditDeviceComponent, {
      data: data
    });

    this.dialogRefEdit.afterClosed().subscribe(result => {
      this.getAllDevice()
    });
  }

  filterItems() {
    this.deviceService.getallDevice()
      .subscribe(
        response => {
          this.devicesList = response
          this.devicesList = this.devicesList.filter(item =>
            item.serialNumber.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
          );
        }
      )

  }

}
