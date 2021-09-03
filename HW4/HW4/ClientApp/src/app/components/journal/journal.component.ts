import {Component, Inject, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {StudentInterface} from "../../interfaces/StudentInterface";


//const today = new Date().toDateString();

// const ELEMENT_DATA: StudentInterface[] = [
//   {name: 'Hydrogen', subject: 'subject 1', mark: 10, date: today},
//   {name: 'Helium', subject: 'subject 2', mark: 4, date: today},
//   {name: 'Lithium', subject: 'subject 1', mark: 6, date: today},
//   {name: 'Beryllium', subject: 'subject 2', mark: 9, date: today},
//   {name: 'Boron', subject: 'subject 1', mark: 10, date: today},
//   {name: 'Carbon', subject: 'subject 2', mark: 12, date: today},
//   {name: 'Nitrogen', subject: 'subject 1', mark: 11, date: today},
//   {name: 'Oxygen', subject: 'subject 2', mark: 12, date: today},
//   {name: 'Fluorine', subject: 'subject 1', mark: 1, date: today},
//   {name: 'Neon', subject: 'subject 2', mark: 2, date: today},
//
// ];


@Component({
  selector: 'app-journal-component',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
})
export class JournalComponent {
  // displayedColumns: string[] = ['name','subject', 'mark' ,'date'];
  // dataSource = [...ELEMENT_DATA];

  public journal$: Observable<StudentInterface[]>;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.journal$ = http.get<StudentInterface[]>(baseUrl + 'api/' + 'journal/' + 'get');
  }


  // @ts-ignore
  // @ViewChild(MatTable) table!: MatTable<StudentInterface>;


  onStudentClick(id: number) {
    console.log("JournalComponent");
    console.log(id);

  }
}
