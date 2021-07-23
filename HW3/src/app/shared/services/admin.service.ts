import {Injectable} from "@angular/core";


@Injectable()
export class AdminService {
  public isAdminLoggedIn = true;

  setAdminLoggedIn(flag: boolean) {
    console.log("isAdminLoggedIn", this.isAdminLoggedIn);
    this.isAdminLoggedIn = flag;
    console.log("isAdminLoggedIn", this.isAdminLoggedIn);
  }
}
