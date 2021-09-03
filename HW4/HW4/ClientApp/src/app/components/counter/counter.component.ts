import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  //public users$: Observable<User[]>;

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  this.users$ = http.get<User[]>(baseUrl + 'student');
  //}


}

//interface User {
//  login: string;
//  passwrod: string;
//}

