import { ExcelServiceService } from './../services/excel-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import 'jspdf-autotable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demo-export-excel',
  templateUrl: './demo-export-excel.component.html',
  styleUrls: ['./demo-export-excel.component.scss']
})
export class DemoExportExcelComponent implements OnInit {

  excel=[{"Name":"Faisal","Month":"Jan","Sales_Figure":21,"Perc":5},
  {"Name":"Faisal","Month":"Feb","Sales_Figure":32,"Perc":15},
  {"Name":"Faisal","Month":"Mar","Sales_Figure":19,"Perc":11},
  {"Name":"Faisal","Month":"Apr","Sales_Figure":8,"Perc":17},
  {"Name":"Faisal","Month":"May","Sales_Figure":26,"Perc":5},
  {"Name":"Faisal","Month":"Jun","Sales_Figure":31,"Perc":2},
  {"Name":"Faisal","Month":"Jul","Sales_Figure":37,"Perc":28},
  {"Name":"Faisal","Month":"Aug","Sales_Figure":16,"Perc":14},
  {"Name":"Faisal","Month":"Sep","Sales_Figure":25,"Perc":19},
  {"Name":"Faisal","Month":"Oct","Sales_Figure":30,"Perc":8},
  {"Name":"Pathan","Month":"Jan","Sales_Figure":41,"Perc":15},
  {"Name":"Pathan","Month":"Feb","Sales_Figure":2,"Perc":5},
  {"Name":"Pathan","Month":"Mar","Sales_Figure":9,"Perc":1},
  {"Name":"Pathan","Month":"Apr","Sales_Figure":82,"Perc":7},
  {"Name":"Pathan","Month":"May","Sales_Figure":46,"Perc":15},
  {"Name":"Pathan","Month":"Jun","Sales_Figure":11,"Perc":20},
  {"Name":"Pathan","Month":"Jul","Sales_Figure":7,"Perc":8},
  {"Name":"Pathan","Month":"Aug","Sales_Figure":6,"Perc":24},
  {"Name":"Pathan","Month":"Sep","Sales_Figure":15,"Perc":9},
  {"Name":"Pathan","Month":"Oct","Sales_Figure":37,"Perc":18}];
  ngOnInit() {
  }

  constructor(private excelService:ExcelServiceService,private router:Router){
    
  }
  
  exportAsXLSX():void {
    console.log(this.router.url)
    var currentUrl=this.router.url;
    if(currentUrl==='/parentExportPdf'){
      this.captureScreen();
    }
   if(currentUrl==='/childExportExcel'){
    this.excelService.exportAsExcel(this.excel, 'sample');
   }
  }
  // public captureScreen()  
  // {  
  //   var data = document.getElementById('contentToConvert');  
  //   html2canvas(data).then(canvas => {  
  //     // Few necessary setting options  
  //     var imgWidth = 208;   
  //     var imgHeight = canvas.height * imgWidth / canvas.width;  
  
  //     const contentDataURL = canvas.toDataURL('image/png')  
  //     let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
  //     var position = 0;  
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
  //     pdf.save('MYPdf.pdf'); // Generated PDF   
  //   });  
  // }  
  public captureScreen()  
  {  
    var col = ["Name", "Month","Sales_Figure","Perc"];
        var rows = [];
    this.excel.forEach(element => {      
      var temp = [element.Name,element.Month,element.Sales_Figure,element.Perc];
      rows.push(temp);

  }); 
    let pdf = new jspdf('p', 'mm', 'a4');
    pdf.autoTable(col, rows);
    pdf.save('MYPdf.pdf');
  }  
}
