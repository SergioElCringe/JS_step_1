const calculator = {
    container: null,
    outputEl: null,
    buttons: null,
    //Below is something like a lookup table for Decimal.js library methods.
    operations: { '+': 'plus', '-': 'minus', '*': 'times', '/': 'div' },
    result: null,
    data: null,

    get last() {
        return this.data[this.data.length - 1];
    },

    set last(value) {
        this.data[this.data.length - 1] = value;
    },

    init() {
        this.container = document.querySelector('.calc__container');
        this.render();
        this.buttons = document.querySelector('.calc__keyboard');
        this.handleEvents();
        this.outputEl = document.querySelector('.calc__screen');
        this.clearAll();
        this.displayInput();
    },

    handleEvents() {
        this.buttons.addEventListener('click', this.processInput.bind(this));
        document.addEventListener('keydown', this.processInput.bind(this));
    },

    processInput(event) {
        if (event.type === 'click') {
            this.chooseAction(event.target.dataset.action);
        } else if (event.type === 'keydown') {
            this.chooseAction(event.key);
        }
        this.displayInput();
    },

    displayInput() {
        if (this.last === 'NaN') {
            this.clearAll();
            this.outputEl.value = 'Result is undefined';
        } else {
            this.outputEl.value = this.data.join(' ');
        }
    },

    chooseAction(input) {
        switch (input) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.processDigit(input)
                break;
            case '.':
                this.processPoint();
                break;
            case '+-':
                this.processPlusMin();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.processOperand(input);
                break;
            case '=':
            case 'Enter':
                this.compute();
                break;
            case 'Escape':
                this.clearAll();
                break;
            case 'Delete':
                this.clearEntry();
                break;
        };
    },

    compute() {
        if (this.data.length === 3) {
            const a = new Decimal(this.data[0]);
            const operand = this.data[1];
            const b = new Decimal(this.data[2]);
            this.result = a[this.operations[operand]](b);
        }
        this.data = [this.result.toString()];
    },

    processDigit(digit) {
        if (this.last in this.operations) {
            this.data.push(digit);
        } else if (this.last !== '0' && this.last !== 'Infinity' && this.last !== '-Infinity') {
            this.last += digit;
        } else {
            this.last = digit;
        }
    },

    processPoint() {
        if (!isNaN(this.last) && !this.last.split('').includes('.') && isFinite(this.last)) {
            this.last += '.';
        } else if (this.last in this.operations) {
            this.data.push('0.');
        }
    },

    processOperand(operand) {
        if (this.data.length === 3) {
            this.compute();
        }
        if (this.last in this.operations) {
            this.last = operand;
        } else {
            this.data.push(operand);
        }
    },

    processPlusMin() {
        if (!isNaN(this.last)) {
            this.last = ((-1) * this.last) + '';
        }
    },

    clearEntry() {
        if (!(this.last in this.operations)) {
            this.last = '0';
        }
    },

    clearAll() {
        this.data = ['0'];
    },

    render() {
        this.container.innerHTML = `
            <input type="text" class="calc__screen" >
            <div class="calc__keyboard">
                <button class="calc__btn" data-action="7">7</button>
                <button class="calc__btn" data-action="4">4</button>
                <button class="calc__btn" data-action="1">1</button>
                <button class="calc__btn" data-action="+-">&#177;</button>
                <button class="calc__btn" data-action="8">8</button>
                <button class="calc__btn" data-action="5">5</button>
                <button class="calc__btn" data-action="2">2</button>
                <button class="calc__btn" data-action="0">0</button>
                <button class="calc__btn" data-action="9">9</button>
                <button class="calc__btn" data-action="6">6</button>
                <button class="calc__btn" data-action="3">3</button>
                <button class="calc__btn" data-action=".">.</button>
                <button class="calc__btn" data-action="+">+</button>
                <button class="calc__btn" data-action="-">-</button>
                <button class="calc__btn" data-action="*">*</button>
                <button class="calc__btn" data-action="/">/</button>
                <button class="calc__btn" data-action="Escape">C</button>
                <button class="calc__btn" data-action="Delete">CE</button>
                <button class="calc__btn calc__btn_high" data-action="=">=</button>
            </div>
        `;
    }
}

calculator.init();
