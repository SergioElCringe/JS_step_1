function plus(a, b) {
    return a + b;
};

function minus(a, b) {
    return a - b;
};

function times(a, b) {
    return a * b;
};

function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль!';
};

function output(result) {
    console.log(`Результат: ${ result }`);
};


 function calculator(operation) {
    if (operation === 1 || operation === 2 || operation === 3 || operation === 4 ) {
        let a = +prompt('Enter A');
        let b = +prompt('Enter B');
        let result;

        switch (operation) {
            case 1: {
                result = plus(a, b);
                break;
            };
            case 2: {
                result = minus(a, b);
                break;
            };
            case 3: {
                result = times(a, b);
                break;
            };
            default: {
                result = divide(a, b);
            }
                
        };
        output(result);
    }   else {
         console.log();
        };
};