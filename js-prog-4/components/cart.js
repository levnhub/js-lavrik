import Parody from '../parody.js';
import InputNumber from './input-number.js';

export default class Cart extends Parody {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          price: 1000,
          rest: 10,
          current: 1,
        },
        {
          price: 2000,
          rest: 5,
          current: 2,
        },
      ],
    };
  }

  render() {
    let div = document.createElement('div');

    this.state.products.forEach((item) => {
      let input = new InputNumber({
        min: 1,
        max: item.rest,
        value: item.current,
      }).render();

      div.appendChild(input);
    });

    return div;
  }
}
