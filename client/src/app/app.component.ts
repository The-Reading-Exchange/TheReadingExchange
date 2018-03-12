import { Component } from "@angular/core";
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
    trigger("headerAnimate", [
      transition("* => *", [
        query(".headerAnim", style({ opacity: 0 }), { optional: true }),

        query(
          ".headerAnim",
          stagger("1000ms", [
            animate(
              "2s ease-in",
              keyframes([
                style({
                  opacity: 0,
                  transform: "translateX(-75%)",
                  offset: 0
                }),
                style({
                  opacity: 0.5,
                  transform: "translateX(10px)",
                  offset: 0.5
                }),
                style({
                  opacity: 1,
                  transform: "translateX(0)",
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
export class AppComponent {
  title = "app";
  pageTitle = "The Reading Exchange";

  constructor(public auth: AuthenticationService) {}
}
