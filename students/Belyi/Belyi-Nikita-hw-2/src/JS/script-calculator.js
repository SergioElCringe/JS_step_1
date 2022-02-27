function sum(a, b) {
    return a + b;
};

function substr(a, b) {
    return a - b;
};

function multipl(a, b) {
    return a * b;
};

function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль!';
};

function output(result) {
    console.log(`Результат: ${ result }`);
};


 function makeOperation(operation) {
    if (operation === 1 || operation === 2 || operation === 3 || operation === 4 ) {
        let a = +prompt('Enter A');
        let b = +prompt('Enter B');
        let result;

        switch (operation) {
            case 1: {
                result = sum(a, b);
                break;
            };
            case 2: {
                result = substr(a, b);
                break;
            };
            case 3: {
                result = multipl(a, b);
                break;
            };
            default: {
                result = divide(a, b);
            }
                
        };
        output(result);
    }   else {
         console.log('Ты не пройдешь!');
        };
};
