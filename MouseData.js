let mice = {
  quantity: 18,
  cost: 100,
  multiplier: 3
};

//NOTE Export vs Export Default
//  Export:
//  Export Default: only one export, automatically put in an object and named
// export default function buyMouse() {
//     //some buisness logic
//     console.log("mouse purchased");
//     mice.quantity++;
//   }

export function buyMouse() {
  //some buisness logic
  console.log("mouse purchased");
  mice.quantity++;
}

export function calculateMultiplier() {
  return mice.quantity * mice.multiplier;
}
