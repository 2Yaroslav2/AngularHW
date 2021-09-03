import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./components/auth/auth.guard";
import {CounterComponent} from "./components/counter/counter.component";
import {FetchDataComponent} from "./components/fetch-data/fetch-data.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {JournalComponent} from "./components/journal/journal.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AddStudentComponent} from "./components/admin/models/add/add.student.component";
import {EditStudentComponent} from "./components/admin/models/edit/edit.student.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'journal', component: JournalComponent, canActivate: [AuthGuard] },
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'edit'
      },
      {
        path: 'add',
        component: AddStudentComponent
      },
      {
        path: 'edit/:id',
        component: EditStudentComponent
      }

    ] },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
