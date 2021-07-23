import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StudentInterfaces} from "../../../../interfaces/student.interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit.student.component.html',
  styleUrls: ['./edit.student.component.css']
})
export class EditStudentComponent {
  value = 'Clear me';


  @Input() oldStudent! : StudentInterfaces;
  @Output() editedStudentEvent = new EventEmitter();

  editedStudent : StudentInterfaces | undefined;
  saveSuccessful : boolean = false


  form!: FormGroup;



  ngOnInit(): void {

    this.form = new FormGroup({
      "name": new FormControl('', Validators.required),
      "subject": new FormControl('', Validators.required),
      "mark": new FormControl(0, [Validators.required,
        Validators.min(0), Validators.max(12)]),
      "date" : new FormControl('', Validators.required)
    });



    this.form.controls['name'].setValue(this.oldStudent.name);
    this.form.controls['subject'].setValue(this.oldStudent.subject);
    this.form.controls['mark'].setValue(this.oldStudent.mark);
    this.form.controls['date'].setValue(this.oldStudent.date);
  }


  btnClickSaveEvent(){

    const tmpName = this.form.get('name')?.value;
    const tmpMark = this.form.get('mark')?.value;
    const tmpSubject = this.form.get('subject')?.value;
    const tmpDate = this.form.get('date')?.value;
    const tmpPosition = this.oldStudent.position;

    this.editedStudent = new class implements StudentInterfaces {
      date: string = tmpDate;
      mark: number = tmpMark;
      name: string = tmpName;
      position: number = tmpPosition;
      subject: string = tmpSubject;
    }

    // console.log('date', this.newStudent.date);
    // console.log('mark', this.newStudent.mark);
    // console.log('name', this.newStudent.name);
    // console.log('subject', this.newStudent.subject);

    this.editedStudentEvent.emit(this.editedStudent);

    if (this.saveSuccessful){
      this.saveSuccessful = false;
    }
    else {
      this.saveSuccessful = true;
    }
  }
}
