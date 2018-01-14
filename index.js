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
  let cartItem
  let cartSentence = "In your cart, you have "
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
    cartItem = Object.keys(cart[0])
    cartSentence += `${cartItem} at $${cart[0][cartItem]}.`
  }
  else if (cart.length === 2) {
    cartItem = Object.keys(cart[0])
    cartSentence += `${cartItem} at $${cart[0][cartItem]} `
    cartItem = Object.keys(cart[1])
    cartSentence += `and ${cartItem} at $${cart[1][cartItem]}.`
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      cartItem = Object.keys(cart[i])
      cartSentence += `${cartItem} at $${cart[i][cartItem]}, `
    }
    cartItem = Object.keys(cart[cart.length - 1])
    cartSentence += `and ${cartItem} at $${cart[cart.length -1][cartItem]}.`
  }
  console.log(cartSentence)
  return cartSentence
}

function total() {
  let totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    let cartItem = Object.keys(cart[i])
    totalPrice += cart[i][cartItem]
  }
  return totalPrice
}

function removeFromCart(item) {
  let cartItem
  for (let i = 0; i < cart.length; i++) {
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
