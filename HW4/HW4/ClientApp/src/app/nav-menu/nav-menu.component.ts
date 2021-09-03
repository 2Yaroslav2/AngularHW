import { Component } from '@angular/core';
import {AuthService} from "../components/auth/auth.service";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(public authService: AuthService) {}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLogoutClick(ev) {
    ev.stopPropagation();
    // console.log('logout click');
    this.authService.logout().subscribe();

    return false;
  }
}
