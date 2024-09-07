import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {
  constructor(private auth: AuthService) {
  }

  username: any = "";
  password: any = "";

  login() {
    return this.auth.login({
      username: this.username,
      password: this.password
    })
  }
}
