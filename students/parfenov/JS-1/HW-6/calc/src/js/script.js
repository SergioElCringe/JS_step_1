
const app = {
    numbersContainer: null,
    output: null,
    finish: false,
    firstNumber: '',
    secondNumber: '',
    sign: '',
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    operators: ['plus', 'minus', 'multiplication', 'devision'],


    init() {
        this.output = document.querySelector('#output');
        this.numbersContainer = document.querySelector('.numbers');
        this.handleEvents();
    },

    handleEvents() {
        this.numbersContainer.addEventListener('click', this.buttonTypeDefinition.bind(this));
    },

    buttonTypeDefinition(evt) {
        const { target: { dataset: { button } } } = evt;
        if (evt.target.classList.contains('number')) {
            this.addNumber(button);
        } else if (evt.target.classList.contains('operator')) {
            this.getOperator(button);
        } else if (evt.target.classList.contains('equal')) {
            this.equal();
        } else if (button == 'negative') {
            this.negative();
        } else if (button == 'clear') {
            this.clear();
        } else if (button == 'delite') {
            this.delite();
        } else if (button == 'procent') {
            this.procentage();
        };
    },

    addNumber(button) {
        if (this.secondNumber === '' && this.sign === '') {
            this.firstNumber += button;
            this.output.value = this.firstNumber;
        } else if (this.firstNumber != '' && this.secondNumber != '' && this.finish) {
            this.secondNumber = button;
            this.finish = false;
            this.output.value = this.secondNumber;
        } else {
            this.secondNumber += button;
            this.output.value = this.secondNumber;
        };
        console.log(this.firstNumber, this.sign, this.secondNumber);
    },

    getOperator(operator) {
        if (this.sign === '') {
            this.sign = operator;
            this.output.value = this.sign;
        } else {
            this.equal();
            this.sign = operator;

        }
        console.log(this.firstNumber, this.sign, this.secondNumber);
    },

    equal() {
        if (this.secondNumber === '') {
            this.secondNumber = this.firstNumber;
        }
        switch (this.sign) {
            case '+':
                this.firstNumber = (+this.firstNumber) + (+this.secondNumber);
                break;
            case '-':
                this.firstNumber = this.firstNumber - this.secondNumber;
                break;
            case '*':
                this.firstNumber = this.firstNumber * this.secondNumber;
                break;
            case '/':
                if (this.secondNumber === '0') {
                    this.output.value = 'Ошибка, деление на ноль'
                    this.firstNumber = '';
                    this.secondNumber = '';
                    this.sign = '';
                    return;
                } else {
                    this.firstNumber = this.firstNumber / this.secondNumber;
                    break
                }
        }
        console.log(this.firstNumber);
        this.finish = true;
        this.output.value = this.firstNumber;

    },

    procentage() {
        if (this.secondNumber === '') {
            this.output.value = this.output.value / 100;
            this.firstNumber = this.output.value;
            console.log("первое " + this.firstNumber)
        }
        else if (this.secondNumber) {
            this.secondNumber = this.secondNumber / 100 * this.firstNumber;
            console.log("первое " + this.firstNumber + " " + "второе " + this.secondNumber)
            this.output.value = this.secondNumber;
        }

    },

    negative() {
        this.output.value = this.output.value * -1;
        if (this.firstNumber != '' && this.secondNumber === '') {
            this.firstNumber = this.output.value;
            return;
        };
        this.secondNumber = this.output.value;
        console.log(this.firstNumber, this.secondNumber)


    },

    delite() {

    },

    clear() {
        this.output.value = '';
        this.finish = false;
        this.firstNumber = '';
        this.secondNumber = '';
        this.sign = '';
    },
};

app.init();

