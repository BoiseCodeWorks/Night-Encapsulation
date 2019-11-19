import Upgrade from "./Upgrade.js";

//PRIVATE
let _gameData = {
  cheese: 0,
  upgrades: {
    pickaxe: new Upgrade("pickaxe", 10, 2, false),
    cart: new Upgrade("cart", 10, 2, false),
    mousetronaut: new Upgrade("mousetronaut", 10, 2, false),
    grater: new Upgrade("grater", 10, 2, false),
    rover: new Upgrade("rover", 10, 2, true),
    ninja: new Upgrade("ninja", 10, 2, false)
  }
};

function drawButtons() {
  let template = "";
  for (let key in _gameData.upgrades) {
    template += _gameData.upgrades[key].ButtonTemplate;
  }
  document.getElementById("button-here").innerHTML = template;
}

//NOTE Local Storage
function save() {
  localStorage.setItem("gameData", JSON.stringify(_gameData));
}

function load() {
  let savedGame = JSON.parse(localStorage.getItem("gameData"));
  if (savedGame) {
    _gameData = savedGame;
  }
}

//PUBLIC
class Game {
  constructor() {}
  mine() {
    _gameData.cheese++;
    console.log(_gameData.cheese);
  }
}

//Singleton

let g = new Game();
drawButtons();
load();
save();

setInterval(save, 5000);

export default g;
