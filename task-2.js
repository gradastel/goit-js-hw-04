"use strict";

const inventory = {
  items: ["Knife", "Elon mask"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.call(inventory, itemName);
};

invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Elon mask', 'Medkit']

invokeInventoryAction("Elon mask", inventory.remove);
// Invoking action on Elon mask
// Removing Elon mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
