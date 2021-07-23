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

  // addStudentView: boolean = false;
  // editStudentView : boolean = false;
  tableStudentView : boolean = true;

  studentForEdit! : StudentInterfaces;

  index : number = -1;

  @ViewChild(MatTable) table!: MatTable<StudentInterfaces>;

  // addDataClick() {
  //   if (this.addStudentView){
  //     this.addStudentView = false;
  //   }
  //   else {
  //     this.addStudentView = true;
  //     this.editStudentView = false;
  //     this.tableStudentView = false;
  //   }
  // }

  viewTableClick(){
    if (this.tableStudentView){
      this.tableStudentView = false;
    }
    else {
      this.tableStudentView = true;
      // this.addStudentView = false;
      // this.editStudentView = false;
    }
  }

  // editStudentClick(){
  //   if (this.editStudentView){
  //     this.editStudentView = false;
  //   }
  //   else {
  //     this.editStudentView = true;
  //     this.addStudentView = false;
  //     this.tableStudentView = false;
  //   }
  // }

  removeDataClick() {
    if (this.dataSource.length != -1){
      this.dataSource.pop();
      this.table.renderRows();
    }
  }

  setNewStudent(student: StudentInterfaces){

    student.position = this.dataSource.length + 1
    this.dataSource.push(student);
    this.table.renderRows();
  }

  onEditBtnClick(student: StudentInterfaces){

    // console.log('in student component date', student.date);
    // console.log('in student component  mark', student.mark);
    console.log('in student component  name', student.name);
    console.log('in student component  position', student.position);
    // console.log('in student component  subject', student.subject);

    console.log('in student.position -1 component  name', this.dataSource[student.position -1].name);

    student.position = this.dataSource.length + 1

    this.dataSource[student.position -1].name = student.name;

    console.log('in "student.position -1" component  name', this.dataSource[student.position -1].name);

    // this.dataSource[student.position -1].subject = student.subject;
    // this.dataSource[student.position -1].mark = student.mark;
    // this.dataSource[student.position -1].date = student.date;

    this.table.renderRows();
  }

  onSelectStudentClick(idx: number){
    //this.btnRemoveClickEvent.emit(idx);
    this.index = idx;
    //console.log("index: ", idx);
    if(idx != -1){
      // this.tableStudentView = false;
      // this.editStudentView = true;

      this.studentForEdit = this.dataSource[idx];
    }
  }
}
