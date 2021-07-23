import { Component } from '@angular/core';
import {StudentInterfaces} from "../../../interfaces/student.interfaces";
import {StudentComponent} from "../../student/student.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  studentComponent: StudentComponent = new StudentComponent();

  addStudentView: boolean = false;
  editStudentView : boolean = false;

  addDataClick() {
    if (this.addStudentView){
      this.addStudentView = false;
    }
    else {
      this.addStudentView = true;
      this.editStudentView = false;
    }
  }

  editStudentClick(){
    if (this.editStudentView){
      this.editStudentView = false;
    }
    else {
      this.editStudentView = true;
      this.addStudentView = false;
    }
  }

  onAddBtnClick(student: StudentInterfaces){
    this.studentComponent.setNewStudent(student);
  }

  onRemoveBtnClick(){
    this.studentComponent.removeDataClick();
  }
}
