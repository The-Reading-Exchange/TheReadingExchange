import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";
import { flipMotion } from "../animations/login.animations";
import { loginForm } from "../animations/logInForm.animations";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [
    flipMotion,
    loginForm
  ]
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: "",
    password: ""
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err);
      }
    );
  }
}
