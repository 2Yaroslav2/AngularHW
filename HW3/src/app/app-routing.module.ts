import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from "./components/models/admin/addStudent/add.student.component";
import {StudentComponent} from "./components/student/student.component";
import {HomeComponent} from "./components/home/home.component";
import {AdminGuard} from "./shared/guards/admin.guard";
import {UserGuard} from "./shared/guards/user.guard";
import {AdminComponent} from "./components/models/admin/admin.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
