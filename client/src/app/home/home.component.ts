import { Component, OnInit } from "@angular/core";
import { easeIn } from "../animations/home.animations";
import { video } from "../animations/video.animations";



@Component({
  // selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    easeIn, //refer to animation.ts to see animation structure
    video
  ]
})
export class HomeComponent {
  items = ["a"]; //using *ngFor method to iterate and trigger animation

  constructor() {
    this.items = ["a"];
  }
}
