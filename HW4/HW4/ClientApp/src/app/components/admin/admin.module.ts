import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import {EditStudentComponent} from "./models/edit/edit.student.component";
import {AdminComponent} from "./admin.component";
import {AddStudentComponent} from "./models/add/add.student.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {RouterModule} from "@angular/router";
import {AdminService} from "./admin.service";

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
    MatFormFieldModule,
    MatInputModule,
    RouterModule,

  ],
  providers: [AdminService],
  bootstrap: []
})
export class AdminModule { }
