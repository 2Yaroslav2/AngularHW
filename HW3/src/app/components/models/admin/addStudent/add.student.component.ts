import {Component, EventEmitter, Output} from '@angular/core';
import {StudentInterfaces} from "../../../../interfaces/student.interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-student',
  templateUrl: './add.student.component.html',
  styleUrls: ['./add.student.component.css']
})
export class AddStudentComponent {


  @Output() newStudentEvent = new EventEmitter();

  newStudent : StudentInterfaces | undefined;
  saveSuccessful : boolean = false

  value = 'Clear me';

  form!: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl('', Validators.required),
      "subject": new FormControl('', Validators.required),
      "mark": new FormControl(0, [Validators.required, Validators.min(0), Validators.max(12)]),
      "date" : new FormControl('', Validators.required)
    });
  }


  btnClickSaveEvent(){

    const tmpName = this.form.get('name')?.value;
    const tmpMark = this.form.get('mark')?.value;
    const tmpSubject = this.form.get('subject')?.value;
    const tmpDate = this.form.get('date')?.value;

    this.newStudent = new class implements StudentInterfaces {
      date: string = tmpDate;
      mark: number = tmpMark;
      name: string = tmpName;
      position: number = 0;
      subject: string = tmpSubject;
    }

    // console.log('date', this.newStudent.date);
    // console.log('mark', this.newStudent.mark);
    // console.log('name', this.newStudent.name);
    // console.log('subject', this.newStudent.subject);

    this.newStudentEvent.emit(this.newStudent);

    if (this.saveSuccessful){
      this.saveSuccessful = false;
    }
    else {
      this.saveSuccessful = true;
    }
  }

}
