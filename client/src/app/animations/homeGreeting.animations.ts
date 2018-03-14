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
             stagger("300ms", [
               animate(
                 "1s ease-in",
                 keyframes([
                   style({
                     opacity: 0,
                     transform: "translateY(-75%)",
                     offset: 0
                   }),
                   style({
                     opacity: 0.5,
                     transform: "translateY(35px)",
                     offset: 0.3
                   }),
                   style({
                     opacity: 0,
                     transform: "translateY(0)",
                     offset: 1.0
                   })
                 ])
               )
             ]),
             { optional: true }
           )
         ])
       ]);









// trigger("greet", [
//   transition("* => *", [
//     query(".greetWords", style({ opacity: 0 }), {
//       optional: true
//     }),

//     query(
//       ".greetWords",
//       stagger("350ms", [
//         animate(
//           "3s ease-in-out",
//           keyframes([
//             style({
//               opacity: 1,
//               transform: "translateY(-100%)", //where it starts easing in
//               offset: 0
//             }),
//             style({
//               opacity: 1,
//               transform: "translateY(-30px)", //adjust position
//               offset: 0.5
//             }),
//             style({
//               opacity: 0,
//               transform: "translateY(100%)", //default position
//               offset: 0.9
//             })
//           ])
//         )
//       ]),
//       { optional: true }
//     )
//   ])
// ]);
