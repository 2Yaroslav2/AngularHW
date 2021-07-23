import {Injectable} from "@angular/core";


@Injectable()
export class UserService {
  isUserLoggedIn = false;

  setUserLoggedIn(flag: boolean) {
    console.log("isAdminLoggedIn", this.isUserLoggedIn);
    this.isUserLoggedIn = flag;
    console.log("isAdminLoggedIn", this.isUserLoggedIn);
  }
}
