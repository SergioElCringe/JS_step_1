const calculator = {
    container: null,
    outputEl: null,
    numBtns: null,
    operandBtns: null,
    commandBtns: null,
    //Below is something like a lookup table for Decimal.js library methods.
    operations: { '+': 'plus', '-': 'minus', '*': 'times', '/': 'div' },
    result: '0',
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
        this.numBtns = document.querySelector('.calc__numbers');
        this.operandBtns = document.querySelector('.calc__operands');
        this.commandBtns = document.querySelector('.calc__commands');
        this.outputEl = document.querySelector('.calc__screen');
        this.handleEvents();
        this.clearAll();
        this.displayInput();
    },

    handleEvents() {
        //handle numbers
        this.numBtns.addEventListener('click', this.processNumber.bind(this));
        document.addEventListener('keydown', this.processNumber.bind(this));
        //handle operands
        this.operandBtns.addEventListener('click', this.processOperand.bind(this));
        document.addEventListener('keydown', this.processOperand.bind(this));
        //handle commands including: C, CE, RESULT
        this.commandBtns.addEventListener('click', this.processCommand.bind(this));
        document.addEventListener('keydown', this.processCommand.bind(this));
        
        this.outputEl.addEventListener('click', this.copyToClipBoard.bind(this));
    },

    processNumber(event) {
        const input = this.getInputValue(event);
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
                this.processDigitInput(input)
                break;
            case '.':
                this.processPointInput();
                break;
            case 'plusMinus':
                this.processPlusMinInput();
                break;
        };
        this.handleBtnStyles(input);
        this.displayInput();
    },

    processOperand(event) {
        const input = this.getInputValue(event);
        const operands = Object.keys(this.operations);
        if(operands.includes(input)) {
            this.processOperandInput(input);
        }
        this.handleBtnStyles(input);
        this.displayInput();
    }, 

    processCommand(event) {
        const input = this.getInputValue(event);
        switch (input) {
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
        }
        this.handleBtnStyles(input);
        this.displayInput();
    },

    displayInput() {
        if (this.last === 'NaN') {
            this.clearAll();
            this.outputEl.innerText = 'Result is undefined';
        } else {
            this.outputEl.innerText = this.data.join(' ');
        }
    },

    getInputValue(event) {
        if (event.type === 'click') {
            return event.target.dataset.action;
        } else if (event.type === 'keydown') {
            return event.key;
        }
    },

    processDigitInput(digit) {
        if (this.last in this.operations) {
            this.data.push(digit);
        } else if (this.last !== '0' && this.last !== 'Infinity' && this.last !== '-Infinity') {
            this.last += digit;
        } else {
            this.last = digit;
        }
    },

    processPointInput() {
        if (!isNaN(this.last) && !this.last.split('').includes('.') && isFinite(this.last)) {
            this.last += '.';
        } else if (this.last in this.operations) {
            this.data.push('0.');
        }
    },

    processOperandInput(operand) {
        if (this.data.length === 3) {
            this.compute();
        }
        if (this.last in this.operations) {
            this.last = operand;
        } else {
            this.data.push(operand);
        }
    },

    processPlusMinInput() {
        if (!isNaN(this.last)) {
            this.last = ((-1) * this.last) + '';
        }
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
            <span class="calc__screen"></span>
            <div class="calc__keyboard">
                <div class="calc__numbers">
                    <button class="calc__btn calc__btn_number" data-action="7">7</button>
                    <button class="calc__btn calc__btn_number" data-action="8">8</button>
                    <button class="calc__btn calc__btn_number" data-action="9">9</button>
                    <button class="calc__btn calc__btn_number" data-action="4">4</button>
                    <button class="calc__btn calc__btn_number" data-action="5">5</button>
                    <button class="calc__btn calc__btn_number" data-action="6">6</button>
                    <button class="calc__btn calc__btn_number" data-action="1">1</button>
                    <button class="calc__btn calc__btn_number" data-action="2">2</button>
                    <button class="calc__btn calc__btn_number" data-action="3">3</button>
                    <button class="calc__btn calc__btn_number" data-action="plusMinus">&#177;</button>
                    <button class="calc__btn calc__btn_number" data-action="0">0</button>
                    <button class="calc__btn calc__btn_number" data-action=".">.</button>
                </div>
                <div class="calc__operands">
                    <button class="calc__btn calc__btn_operand" data-action="+">+</button>
                    <button class="calc__btn calc__btn_operand" data-action="-">-</button>
                    <button class="calc__btn calc__btn_operand" data-action="*">*</button>
                    <button class="calc__btn calc__btn_operand" data-action="/">/</button>
                </div>
                <div class="calc__commands">
                    <button class="calc__btn calc__btn_command" data-action="Escape">C</button>
                    <button class="calc__btn calc__btn_command" data-action="Delete">CE</button>
                    <button class="calc__btn calc__btn_command calc__btn_result calc__btn_high" data-action="Enter">=</button>
                </div>
            </div>
        `;
    },

    /*styles handling*/
    handleBtnStyles(input) {
        const btn = this.container.querySelector(`[data-action|="${input}"]`);
        btn.classList.toggle('calc__btn_active');
        setTimeout(() => btn.classList.toggle('calc__btn_active'), 300);
    },

    /*copy output value*/
    copyToClipBoard(event) {
        const value = event.target.innerText;
        document.execCommand('copy');
        event.target.innerText = 'Copied';
        setTimeout(() => event.target.innerText = value, 500);
    }
}

calculator.init();