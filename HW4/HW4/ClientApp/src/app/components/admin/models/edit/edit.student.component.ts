import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentInterface} from "../../../../interfaces/StudentInterface";
import {AdminService} from "../../admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit.student.component.html',
  styleUrls: ['./edit.student.component.css']
})
export class EditStudentComponent implements OnInit{

  student$ : Observable<StudentInterface>;
  form!: FormGroup;

  constructor(private readonly adminService: AdminService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.params.subscribe(p => {
      adminService.getStudentBuId(p.id).subscribe(res=>{
        this.form.setValue({
          id : res.id,
          name : res.name,
          subject : res.subject,
          mark : res.mark,
          date : res.date
        });
      });
    });
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      "id" : new FormControl(),
      "name": new FormControl(Validators.required),
      "subject": new FormControl(Validators.required),
      "mark": new FormControl([Validators.required,
        Validators.min(0), Validators.max(12)]),
      "date" : new FormControl(Validators.required)
    });
  }


  onBtnClick(){

    const tmpId : number = this.form.get('id').value;
    const tmpName : string = this.form.get('name').value;
    const tmpMark : number = this.form.get('mark').value;
    const tmpSubject : string = this.form.get('subject').value;
    const tmpDate : string = this.form.get('date').value;

    this.adminService.editStudent(new class implements StudentInterface {
      date: string = tmpDate;
      id: number = tmpId;
      mark: number = tmpMark;
      name: string = tmpName;
      subject: string = tmpSubject;
    }).subscribe(()=>{ this.router.navigate(['/journal'])});

  }

  onBtnDeleteClick() {
    const id : number = 5;
    this.adminService.deleteStudent(id).subscribe(()=>{
      this.router.navigate(['/journal'])
    });
  }
}
