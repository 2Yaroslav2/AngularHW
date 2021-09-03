import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {JournalComponent} from "./journal.component";
import {CdkTableModule} from '@angular/cdk/table';
import {MatButtonModule} from "@angular/material/button";
import {StudentComponent} from "./student/student.component";

@NgModule({
  declarations: [
    JournalComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatButtonModule,
  ],
  providers: [],

})
export class JournalModule { }
