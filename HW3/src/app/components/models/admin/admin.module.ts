import { NgModule } from '@angular/core';
import {AdminComponent} from "./admin.component";
import {AddStudentComponent} from "./addStudent/add.student.component";
import {EditStudentComponent} from "./editStudent/edit.student.component";

@NgModule({
  declarations: [
    AdminComponent,
    AddStudentComponent,
    EditStudentComponent,
  ],
  imports: [

  ],
  // exports: [AdminComponent],
  providers: [],
})
export class AdminModule { }
