var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {}
  let itemPrice = Math.floor(Math.random() * 100)
  newItem[item] = itemPrice
  cart.push(newItem)
  console.log(`${item} has been added to yoru cart.`)
  return cart
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
