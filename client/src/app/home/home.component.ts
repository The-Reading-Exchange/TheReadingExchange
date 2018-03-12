import { Component, OnInit } from '@angular/core';
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
  // selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        query(":enter", style({ opacity: 0 }), { optional: true }),

        query(
          ":enter",
          stagger("3000ms", [
            animate(
              "7s ease-in",
              keyframes([
                style({
                  opacity: 0,
                  transform: "translateY(-30%)",
                  offset: 0
                }),
                style({
                  opacity: 0.5,
                  transform: "translateY(30px)",
                  offset: 0.5
                }),
                style({
                  opacity: 0.3,
                  transform: "translateY(0)",
                  offset: 1
                })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class HomeComponent {
  items = ["a"];

  constructor() {
    this.items = ["a"];
  }

  pushItem() {
    this.items.push("Oh yeah that is awesome");
  }
  removeItem() {
    this.items.pop();
  }
  // photo = [];

  // constructor() {
  //   this.photo = [
  //     "../../assets/images/books1.jpeg",
  //     "../../assets/images/books2.jpeg",
  //     "../../assets/images/books3.jpeg"
  //   ];
  // }

  // pushPhoto() {
  //   this.photo.push("../../assets/images/books4.jpeg");
  // }

  // removePhoto() {
  //   this.photo.pop();
  // }

  // ngOnInit() {}
}
