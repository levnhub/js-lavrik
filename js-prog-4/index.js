import Cart from './components/cart';

// let cart = new Cart();
// document.querySelector('.sample').appendChild(cart.render());

new Cart().bindMount('.sample').render();
