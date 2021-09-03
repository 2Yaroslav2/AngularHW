import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import {StudentInterface} from "../../../interfaces/StudentInterface";



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() student!: StudentInterface;

  constructor(private router: Router) {
  }

  onStudentClick() {
    this.router.navigate(['admin/edit', this.student.id]);
  }

}
