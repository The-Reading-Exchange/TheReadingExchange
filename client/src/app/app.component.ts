import { Component } from "@angular/core";
import { easeInHeaders } from "./animations/headers.animations";
import { AuthenticationService } from "./authentication.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    easeInHeaders
  ]
})
export class AppComponent {
  title = "app";
  pageTitle = "The Reading Exchange";

  constructor(public auth: AuthenticationService) {}
}
