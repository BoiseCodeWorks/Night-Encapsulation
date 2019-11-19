export default class Upgrade {
  constructor(name, price, multiplier, autoUpgrade) {
    this.price = price;
    this.name = name;
    this.multiplier = multiplier;
    this.quantity = 0;
    this.autoUpgrade = autoUpgrade;
  }
  //NOTE Getters act like properties on the object instance
  get ButtonTemplate() {
    return `<button id="${this.name}-btn" class="btn-${
      this.autoUpgrade ? "danger" : "info"
    } mb-2" onclick="game.buyUpgrade('${this.name}')">${this.name}</button>`;
  }
}
