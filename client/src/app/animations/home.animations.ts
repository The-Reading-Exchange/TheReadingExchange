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

export let easeIn = trigger("listAnimation", [
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
]);
