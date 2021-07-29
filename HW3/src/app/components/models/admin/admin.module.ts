import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AdminComponent} from "./admin.component";
import {AddStudentComponent} from "./addStudent/add.student.component";
import {EditStudentComponent} from "./editStudent/edit.student.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AdminComponent,
    AddStudentComponent,
    EditStudentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
})
export class AdminModule { }
