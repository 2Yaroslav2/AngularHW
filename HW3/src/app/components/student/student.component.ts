import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import {StudentInterfaces} from "../../interfaces/student.interfaces";

const today = new Date().toDateString();

const ELEMENT_DATA: StudentInterfaces[] = [
  {position: 1, name: 'Hydrogen', subject: 'subject 1', mark: 10, date: today},
  {position: 2, name: 'Helium', subject: 'subject 2', mark: 4, date: today},
  {position: 3, name: 'Lithium', subject: 'subject 1', mark: 6, date: today},
  {position: 4, name: 'Beryllium', subject: 'subject 2', mark: 9, date: today},
  {position: 5, name: 'Boron', subject: 'subject 1', mark: 10, date: today},
  {position: 6, name: 'Carbon', subject: 'subject 2', mark: 12, date: today},
  {position: 7, name: 'Nitrogen', subject: 'subject 1', mark: 11, date: today},
  {position: 8, name: 'Oxygen', subject: 'subject 2', mark: 12, date: today},
  {position: 9, name: 'Fluorine', subject: 'subject 1', mark: 1, date: today},
  {position: 10, name: 'Neon', subject: 'subject 2', mark: 2, date: today},
];

/**
 * @title Adding and removing data when using an array-based datasource.
 */
@Component({
  selector: 'app-student-component',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  displayedColumns: string[] = ['position', 'name','subject', 'mark' ,'date'];
  dataSource = [...ELEMENT_DATA];

  tableStudentView : boolean = true;

  @ViewChild(MatTable) table!: MatTable<StudentInterfaces>;

  viewTableClick(){
    if (this.tableStudentView){
      this.tableStudentView = false;
    }
    else {
      this.tableStudentView = true;
    }
  }






}
