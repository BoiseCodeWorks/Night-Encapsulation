//NOTE Lexical Scope and Closure
// let secret = "Mark"; //global variable
//NOTE lexical scope using an IFEE tag
// window["app"] = (() => {
//   let secret = "Mark";
//   return {
//     wisper: function() {
//       //getter
//       console.log(secret);
//     },
//     newSecret: function(str) {
//       //business logic to change value
//       if (typeof str != "string") {
//         throw new Error("Invalid Secret");
//       }
//       secret = str;
//     }
//   };
// })();

// let lex = lexical();

//NOTE Export default
// import buyMouse from "./Animals.js"

//NOTE export
// import { buyMouse, calculateMultiplier } from "./MouseData.js";

// console.log(buyMouse());

//NOTE NO access to data not exported
// console.log(mice);

import Game from "./Game.js";

window["game"] = Game;
