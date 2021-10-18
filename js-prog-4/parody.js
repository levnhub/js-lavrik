export default class Parody {
  constructor(props) {
    this.props = props;
  }

  render() {
    let div = document.createElement('div');
    div.innerHTML = '1';
    return div;
  }
}

// import Cart from './components/cart.js';

// let cart = new Cart();
// document.querySelector('.sample').appendChild(cart.render());
