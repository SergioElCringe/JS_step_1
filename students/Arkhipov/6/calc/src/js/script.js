const app = {
  firstNum: '',
  secondNum: '',
  mathSign: '',
  end: false,
  outputValue: null,
  buttonsConteiner: null,

  init() {
    this.outputValue = document.querySelector('#output');
    this.outputValue.value = 0;
    this.buttonsConteiner = document.querySelector('#buttons');
    this.buttonsConteiner.addEventListener("click", this.hearEvent.bind(this));
  },

  cleanAll() {
    this.firstNum = '';
    this.secondNum = '';
    this.mathSign = '';
    this.end = false;
    this.outputValue.value = '0';
  },

  hearEvent(event) {
    const buttonKey = event.target.dataset.event;
    switch (buttonKey) {
      case 'AC': this.cleanAll();
        break;
      case '0': this.addNum(0);
        break;
      case '1': this.addNum(1);
        break;
      case '2': this.addNum(2);
        break;
      case '3': this.addNum(3);
        break;
      case '4': this.addNum(4);
        break;
      case '5': this.addNum(5);
        break;
      case '6': this.addNum(6);
        break;
      case '7': this.addNum(7);
        break;
      case '8': this.addNum(8);
        break;
      case '9': this.addNum(9);
        break;
      case '.': this.addNum('.');
        break;
      case 'del': this.addNum('del');
        break;
      case '±': this.addNum('±');
        break;
      case '+': this.addSign('+');
        break;
      case '-': this.addSign('-');
        break;
      case 'x': this.addSign('x');
        break;
      case '/': this.addSign('/');
        break;
      case '=': this.result();
        break;
    }
  },

  addNum(num) {
    if (this.secondNum === '' && this.mathSign === '') {
      this.addFirstNum(num);
    } else if (this.firstNum !== '' && this.secondNum !== '' && this.end) {
      this.secondNum = num;
      this.end = false;
      this.outputValue.value = this.secondNum;
    } else {
      this.addSecodNum(num);
    }
  },

  changeNumberToNegative(num) {
    return num * -1;
  },

  addFirstNum(num) {
    if (num === '.' && this.firstNum.includes('.')) {
      this.firstNum += '';
      this.outputValue.value = this.firstNum;
    } else if (num === '±') {
      this.firstNum = this.changeNumberToNegative(this.firstNum);
      this.outputValue.value = this.firstNum;
    } else if (num === 'del') {
      this.firstNum = this.firstNum.substring(0, this.firstNum.length - 1);
      this.outputValue.value = this.firstNum;
    } else {
      this.firstNum += num;
      this.outputValue.value = this.firstNum;
    }
  },

  addSecodNum(num) {
    if (num === '.' && this.secondNum.includes('.')) {
      this.secondNum += '';
      this.outputValue.value = this.secondNum;
    } else if (num === '±') {
      this.secondNum = this.changeNumberToNegative(this.secondNum);
      this.outputValue.value = this.secondNum;
    } else if (num === 'del') {
      this.secondNum = this.secondNum.substring(0, this.secondNum.length - 1);
      this.outputValue.value = this.secondNum;
    } else {
      this.secondNum += num;
      this.outputValue.value = this.secondNum;
    }
  },

  addSign(sign) {
    this.mathSign = sign;
    this.outputValue.value = this.mathSign;
  },

  result() {
    if (this.secondNum === '') {
      this.secondNum = this.firstNum;
    }
    switch (this.mathSign) {
      case '+': this.firstNum = +this.firstNum + +this.secondNum;
        break;
      case '-': this.firstNum = +this.firstNum - +this.secondNum;
        break;
      case 'x': this.firstNum = +this.firstNum * +this.secondNum;
        break;
      default: if (this.secondNum !== '0') {
        this.firstNum = +this.firstNum / +this.secondNum;
        break;
      } else {
        this.firstNum = 'Error';
        setTimeout(() => this.cleanAll(), [1000]);
        this.secondNum = '';
        this.mathSign = '';
      }
    };
    this.end = true;
    this.outputValue.value = this.firstNum;
  },

}
app.init();
