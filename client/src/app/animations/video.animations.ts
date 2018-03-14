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

export let video = trigger("enterVideo", [
  transition("* => *", [
    query(".enterVideo", style({ opacity: 0 }), {
      optional: true
    }),

    query(
      ".enterVideo",
      stagger("10000ms", [
        animate(
          "7s ease-in",
          keyframes([
            style({
              opacity: 1,
              transform: "translateX(75%)",
              offset: 0
            }),
            style({
              opacity: 0.5,
              transform: "translateY(-10px)",
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
