const calculator = {
    container: null,
    outputEl: null,
    buttons: null,
    data: ['0'],
    operands: [],
    names: {},
    result: null,

    init() {
        this.container = document.querySelector('.calc__container');
        this.render();
        this.operands = ['+', '-', '*', '/'];
        this.names = {
            '+': 'plus',
            '-': 'minus',
            '*': 'times',
            '/': 'div'
        },
            this.outputEl = document.querySelector('.calc__screen');
        this.outputEl.value = '0';
        this.buttons = document.querySelector('.calc__keyboard');
        this.handleEvents();
    },

    handleEvents() {
        this.buttons.addEventListener('click', this.chooseAction.bind(this));
    },

    chooseAction(event) {
        const trigger = event.target;
        if (trigger.classList.contains('calc__btn_symbol')) {
            this.processDigit(trigger);
        } else if (trigger.classList.contains('calc__btn_point')) {
            this.processPoint();
        } else if (trigger.classList.contains('calc__btn_operation')) {
            this.processOperand(trigger);
        } else if (trigger.classList.contains('calc__btn_plusmin')) {
            this.processPlusMin();
        } else if (trigger.classList.contains('calc__btn_ce')) {
            this.clearEntry();
        } else if (trigger.classList.contains('calc__btn_c')) {
            this.clearAll();
        } else if (trigger.classList.contains('calc__btn_result')) {
            this.compute();
        }
        this.displayInput();
    },

    displayInput() {
        if (this.data[this.data.length - 1] === 'NaN') {
            this.data = ['0'];
            this.outputEl.value = 'Result is undefined';
        } else {
            this.outputEl.value = this.data.join(' ');
        }
    },

    compute() {
        const data = this.data;
        let result = new Decimal(data.shift());
        if (this.data.length === 2) {
            const el1 = data.shift();
            const el2 = new Decimal(data.shift());
            result = result[this.names[el1]](el2);
        }
        this.data = [result.toString()];
    },
    
    processDigit(trigger) {
        const digit = trigger.dataset.symbol;
        const lastEl = this.data[this.data.length - 1];
        if (this.operands.includes(lastEl)) {
            this.data.push(digit);
        } else if (lastEl !== '0' && lastEl !== 'Infinity' && lastEl !== '-Infinity') {
            this.data[this.data.length - 1] += digit;
        } else {
            this.data[this.data.length - 1] = digit;
        }
    },

    processPoint() {
        const lastEl = this.data[this.data.length - 1];
        if (!isNaN(lastEl) && !lastEl.split('').includes('.') && isFinite(lastEl)) {
            this.data[this.data.length - 1] += '.';
        } else if (this.operands.includes(lastEl)) {
            this.data.push('0.');
        }
    },

    processOperand(trigger) {
        if (this.data.length === 3) {
            this.compute();
        }
        if (this.operands.includes(this.data[this.data.length - 1])) {
            this.data.pop();
            this.data.push(trigger.innerHTML);
        } else {
            this.data.push(trigger.innerHTML);
        }
    },

    processPlusMin() {
        if (!isNaN(this.data[this.data.length - 1])) {
            console.log(this.data[this.data.length - 1]);
            this.data[this.data.length - 1] = ((-1) * this.data[this.data.length - 1]) + '';
        }
    },

    clearEntry() {
        if (!this.operands.includes(this.data[this.data.length - 1])) {
            this.data[this.data.length - 1] = '0';
        }
    },

    clearAll() {
        this.data = ['0'];
    },

    render() {
        this.container.innerHTML = `
            <input type="text" class="calc__screen" >
            <div class="calc__keyboard">
                <button class="calc__btn calc__btn_symbol" data-symbol="7">7</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="4">4</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="1">1</button>
                <button class="calc__btn calc__btn_plusmin">&#177;</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="8">8</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="5">5</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="2">2</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="0">0</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="9">9</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="6">6</button>
                <button class="calc__btn calc__btn_symbol" data-symbol="3">3</button>
                <button class="calc__btn calc__btn_point">.</button>
                <button class="calc__btn calc__btn_operation" data-operation="plus">+</button>
                <button class="calc__btn calc__btn_operation" data-operation="minus">-</button>
                <button class="calc__btn calc__btn_operation" data-operation="times">*</button>
                <button class="calc__btn calc__btn_operation" data-operation="div">/</button>
                <button class="calc__btn calc__btn_c">C</button>
                <button class="calc__btn calc__btn_ce">CE</button>
                <button class="calc__btn calc__btn_high calc__btn_result">=</button>
            </div>
        `;
    }

}

calculator.init();
