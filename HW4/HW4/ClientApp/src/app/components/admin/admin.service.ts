import { Injectable } from "@angular/core";
import {from, Observable, of} from "rxjs";
import { environment } from "src/environments/environment";
import {StudentInterface} from "../../interfaces/StudentInterface";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    mode: 'no-cors'
  };

  constructor(private httpClient : HttpClient) {
  }

  addStudent(student: StudentInterface) {
    return this.httpClient.post([environment.API_URL, 'journal', 'add'].join('/'), student);
  }

  editStudent(student: StudentInterface) {
    return this.httpClient.put([environment.API_URL, 'journal', 'update'].join('/'), student);
  }

  deleteStudent(id: number) {
    return this.httpClient.delete([environment.API_URL, 'journal', 'delete'].join('/'), {
      params: new HttpParams().set('id', id.toString())});
  }

  getStudentBuId(id: number) : Observable<StudentInterface> {
    return this.httpClient.get<StudentInterface>([environment.API_URL, 'journal', 'getById'].join('/'), {
      params: new HttpParams().set('id', id.toString())});

  }

}

