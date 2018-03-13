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

export let flipMotion = trigger("flip", [
  transition("* => *", [
    query(".flip", style({ opacity: 0 }), {
      optional: true
    }),

    query(
      ".flip",
      stagger("1000ms", [
        animate(
          "1s ease-in",
          keyframes([
            style({
              opacity: 0,
              transform: "translateX(75%)",
              offset: 0
            }),
            style({
              opacity: 0.5,
              transform: "translateY(-20px)",
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
]);
