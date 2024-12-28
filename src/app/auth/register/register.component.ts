import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private router: Router,
  ) {
  }
  login() {
    this.router.navigate(['auth/login']);
  }
}
