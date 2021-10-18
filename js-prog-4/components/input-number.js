import Parody from '../parody.js';

export default class InputNumber extends Parody {
  constructor(props) {
    super(props);
  }

  render() {
    let num = document.createElement('input');
    num.className = 'inputNumber__value';
    num.setAttribute('type', 'text');
    nav.value = this.props.value;
    nav.addEventListener('change', (e) => {
      console.log(e.target.value);
    });

    return num;
  }
}
