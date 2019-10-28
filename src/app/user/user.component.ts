import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface User {
  name: string;
  position: number;
  weight: number;
  gender: string;
}
const ELEMENT_DATA: User[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, gender: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, gender: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, gender: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, gender: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, gender: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, gender: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, gender: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, gender: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, gender: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, gender: 'Ne' },
];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'gender'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
  @Input() SearchString;
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.SearchString);
    if(this.SearchString){
      console.log(ELEMENT_DATA.filter(x => x.name === this.SearchString))
      this.dataSource = new MatTableDataSource<User>(ELEMENT_DATA.filter(x => x.name === this.SearchString));
    }else{
      this.dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
    }
   
  }
  ngOnInit() {
  }

}
