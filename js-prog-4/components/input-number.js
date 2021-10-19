import Parody from '../parody/index.js';

export default class InputNumber extends Parody {
  constructor(props) {
    super(props);
  }

  render() {
    let num = document.createElement('input');
    num.className = 'inputNumber__value';
    num.setAttribute('type', 'text');
    num.value = this.props.value;
    num.addEventListener('change', (e) => {
      console.log(e.target.value);
    });

    return num;
  }
}
