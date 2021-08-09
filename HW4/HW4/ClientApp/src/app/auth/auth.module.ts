import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
// import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
return localStorage.getItem("jwt");
}

@NgModule({
declarations: [
  LoginComponent
],
imports: [
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  // JwtModule.forRoot({
  //   config: {
  //     tokenGetter: tokenGetter,
  //     allowedDomains: ['http://localhost:41102/']
  //   }
  // })
],
providers: [AuthService],   //JwtHelperService
bootstrap: []
})
export class AuthModule { }
