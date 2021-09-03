import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentInterface} from "../../../../interfaces/StudentInterface";
import {AdminService} from "../../admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-student',
  templateUrl: './add.student.component.html',
  styleUrls: ['./add.student.component.css']
})
export class AddStudentComponent implements OnInit{

  newStudent : StudentInterface;
  saveSuccessful : boolean = false;

  form!: FormGroup;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl('', Validators.required),
      "subject": new FormControl('', Validators.required),
      "mark": new FormControl(0, [Validators.required, Validators.min(1), Validators.max(12)]),
      "date" : new FormControl('', Validators.required)
    });
  }


  onBtnClick() : void {
    if (this.form.valid){
      const tmpName = this.form.get('name').value;
      const tmpMark = this.form.get('mark').value;
      const tmpSubject = this.form.get('subject').value;
      const tmpDate = this.form.get('date').value;

      this.newStudent = new class implements StudentInterface {
        id : number = 0;
        date: string = tmpDate;
        mark: number = Number(tmpMark);
        name: string = tmpName;
        subject: string = tmpSubject;
      }

      this.adminService.addStudent(this.newStudent).subscribe(()=>{
        this.router.navigate(['/journal'])
      });

    }

  }


}
