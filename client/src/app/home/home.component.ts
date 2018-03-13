import { Component, OnInit } from "@angular/core";
import { easeIn } from "../animations/home.animations";


@Component({
  // selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    easeIn //refer to animation.ts to see animation structure
  ]
})
export class HomeComponent {
  items = ["a"];//using *ngFor method to iterate and trigger animation

  constructor() {
    this.items = ["a"];
  }
}
