import { Component } from '@angular/core';
import {AdminService} from "./shared/services/admin.service";
import {UserService} from "./shared/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW3';
  admin : AdminService = new AdminService();
  user: UserService = new UserService();

  btnAdminLoggedIn(){
    this.admin.setAdminLoggedIn(true);
  }
  btnUserLoggedIn(){
    this.user.setUserLoggedIn(true);
  }
}
