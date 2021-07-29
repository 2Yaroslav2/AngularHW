import {Component, ViewChild} from '@angular/core';
import {StudentInterfaces} from "../../../interfaces/student.interfaces";
import {StudentComponent} from "../../student/student.component";
import {MatTable} from "@angular/material/table";

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


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  displayedColumns: string[] = ['position', 'name','subject', 'mark' ,'date'];
  dataSource = [...ELEMENT_DATA];

  index : number = -1;

  @ViewChild(MatTable) table!: MatTable<StudentInterfaces>;


  studentForEdit! : StudentInterfaces;

  addStudentView: boolean = false;
  editStudentView : boolean = false;
  tableStudentView : boolean = true;

  addDataClick() {
    if (this.addStudentView){
      this.addStudentView = false;
    }
    else {
      this.addStudentView = true;
      this.editStudentView = false;
      this.tableStudentView = false;
    }
  }

  editStudentClick(){
    if (this.editStudentView){
      this.editStudentView = false;
    }
    else {
      this.editStudentView = true;
      this.addStudentView = false;
      this.tableStudentView = false;
    }
  }

  viewTableClick(){
    if (this.tableStudentView){
      this.tableStudentView = false;
    }
    else {
      this.tableStudentView = true;
      this.addStudentView = false;
      this.editStudentView = false;
    }
  }


  onRemoveBtnClick() {
    if (this.dataSource.length != -1){
      this.dataSource.pop();
      this.table.renderRows();
    }
  }

  setNewStudentBtnClick(student: StudentInterfaces){

    student.position = this.dataSource.length + 1
    this.dataSource.push(student);
    this.table.renderRows();
  }

  setEditedStudentBtnClick(student: StudentInterfaces){

    const idx : number = student.position -1;
    this.dataSource[idx].name = student.name;

    this.dataSource[idx].subject = student.subject;
    this.dataSource[idx].mark = student.mark;
    this.dataSource[idx].date = student.date;

    this.table.renderRows();
  }



  onSelectStudentClick(idx: number){
    //this.btnRemoveClickEvent.emit(idx);
    this.index = idx;

    if(idx != -1){

      this.studentForEdit = this.dataSource[idx];

      this.tableStudentView = false;
      this.editStudentView = true;

    }
  }
}
