const calculator = {
    outputEl: null,
    buttons: null,
    input: null,
    result: null,
    operation: {
        _data: {
            num1: null,
            num2: null
        },
        _name: null,
        compute(num, operationName) {
            if(!this.data.num1) {
                this.data = num;
                this.name = operationName;
                return '0';
            } else if (this.data.num1 && !this.data.num2) {
                this.data = num;
                const result = this.data.num1[this.name](this.data.num2);
                this.name = operationName;
                this.reset();
                this.data = result;
                return result;
            }
        },
        
        get name() {
            return this._name;
        },
        set name(value) {
            this._name = value;
        },
        get data() {
            return this._data;
        },
        set data(value) {
            if (!this.data.num1 && !this.data.num2) {
                this.data.num1 = new Decimal(value);
                console.log(`num1: ${this.data.num1}`);
            } else if (this.data.num1 && !this.data.num2) {
                this.data.num2 = new Decimal(value);
                console.log(`num2: ${this.data.num2}`);
            }
        },
        reset() {
            this._data.num1 = null;
            this._data.num2 = null;
        }
    },

    init() {
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
            this.getInput(trigger);
            this.displayInput();
        } else if (trigger.classList.contains('calc__btn_operation')) {
            const result = this.operation.compute(this.input, trigger.dataset.operation);
            this.outputEl.value = result;
            this.input = '0';
        } else if (trigger.classList.contains('calc__btn_result')) {
            
        }
    },
    getInput(trigger) {
        if (this.input === null || this.input === '0') {
            this.input = trigger.dataset.symbol;
        } else {
            this.input += trigger.dataset.symbol;
        }
    },
    displayInput() {
        this.outputEl.value = this.input;
    },

}

calculator.init();
