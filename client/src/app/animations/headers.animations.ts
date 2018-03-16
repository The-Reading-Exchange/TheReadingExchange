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

export let easeInHeaders = trigger("headerAnimate", [
         transition("* => *", [
           query(".headerAnim", style({ opacity: 0 }), {
             optional: true
           }),

           query(
             ".headerAnim",
             stagger("500ms", [
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
       ]);
