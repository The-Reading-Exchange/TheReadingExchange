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

export let greeting = trigger("greet", [
  transition("* => *", [
    query(".greetWords", style({ opacity: 0 }), {
      optional: true
    }),

    query(
      ".greetWords",
      stagger("350ms", [
        animate(
          "3s ease-in",
          keyframes([
            style({
              opacity: 1,
              transform: "translateY(-100%)", //where it starts easing in
              offset: 0
            }),
            style({
              opacity: 1,
              transform: "translateY(-30px)", //adjust position
              offset: 0.5
            }),
            style({
              opacity: 1,
              transform: "translateY(0)", //default position
              offset: 1
            })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);
