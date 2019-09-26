import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {}
  title = 'protecting-routes-with-canActivate';
  goToParent() {
    this.router.navigate(['/parent']);
  }
  goToChild() {
    this.router.navigate(['/child']);
  }
  logIn() {
    this.authService.login();
  }
  logOut() {
    this.authService.logout();
  }
}
