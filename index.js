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
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let cartItems = "In your cart, you have "
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
    cartItems += `${cart[0].
  }
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
