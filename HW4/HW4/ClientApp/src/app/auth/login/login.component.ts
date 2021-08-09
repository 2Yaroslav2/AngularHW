import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'login': new FormControl('admin@gmail.com', [Validators.required]),
      'password': new FormControl('12345', [Validators.required])
    })
  }

  onLoginClick() {
    if (this.form.valid) {
      //console.log(this.form);
      const { login, password } = this.form.value;
      this.authService.login(login, password).subscribe(() => {
        this.router.navigate(['/'])
      });
    }
  }
}
