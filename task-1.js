"use strict";

const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    account.discount = value;
    return this.value;
  },
  showOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    account.balance -= cost;
    account.orders.push(order);
    return this.cost, order;
  },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.log(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, "order-4");
console.log(account.balance); // 19000
console.log(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
