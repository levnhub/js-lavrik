import { Parody, ParodyDom } from '../parody/parody.js';

export default class InputNumber extends Parody {
  constructor(props) {
    super(props);
    this.onChange = 'change' in props ? props.change : function () {};
  }

  // private function
  _normalizeValue(val) {
    let newVal = parseInt(val);
    if (isNaN(newVal) || newVal < this.props.min) {
      newVal = this.props.min;
    } else if (newVal > this.props.max) {
      newVal = this.props.max;
    }
    this.onChange(newVal);
  }

  render() {
    // Parse by JSX (optimal)
    return super.render(
      <div className="inputNumber">
        Поле:{' '}
        <input
          type="button"
          value="-"
          onclick={() => {
            this._normalizeValue(this.props.value - 1);
          }}
          className="inputNumber__min"
        />
        <input
          type="text"
          value={this.props.value}
          onclick="*****"
          className="inputNumber__value"
        />
        <input
          type="button"
          value="+"
          onclick={() => {
            this._normalizeValue(this.props.value + 1);
          }}
          className="inputNumber__plus"
        />
      </div>
    );
    // /* JSX mechanism that convert this:
    // <div className="">
    //   <input type="button" value="-" onclick="*****" className="inputNumber__min"/>
    // </div>
    // to this:
    // React.createElement('div', {className: ""}, React.createElement('input))
    // */

    // // Manual render
    // let min = createNode('input', {
    //   type: 'button',
    //   value: '-',
    //   onclick: () => {
    //     this._normalizeValue(this.props.value - 1);
    //   },
    //   className: 'inputNumber__min',
    // });
    // // Manual create
    // // let min = document.createElement('input');
    // // min.setAttribute('type', 'button');
    // // min.value = '-';
    // // min.addEventListener('click', () => {
    // //   this._normalizeValue(this.props.value - 1);
    // // });

    // let plus = document.createElement('input');
    // plus.setAttribute('type', 'button');
    // plus.value = '+';
    // plus.addEventListener('click', () => {
    //   this._normalizeValue(this.props.value + 1);
    // });

    // let num = document.createElement('input');
    // num.className = 'inputNumber__value';
    // num.setAttribute('type', 'text');
    // num.value = this.props.value;
    // num.addEventListener('change', (e) => {
    //   this._normalizeValue(e.target.value);
    // });

    // let root = document.createElement('div');
    // root.appendChild(min);
    // root.appendChild(num);
    // root.appendChild(plus);

    // return super.render(root);
  }
}
