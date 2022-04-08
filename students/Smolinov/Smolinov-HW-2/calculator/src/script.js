function sum(a, b) {
    return a + b 
};

function sub(a, b) {
    return a - b 
};

function multi(a, b) {
    return a * b 
};

function div(a, b) {
    if (b != 0) {
        return a / b
    }
    else {
        console.log('Делить на 0 нельзя!');
    };
};

function consoleResult(result) {
    console.log(result);
};

function makeOperation(operation) {
    if (operation === 1 || operation === 2 || operation === 3 || operation === 4) {
        let a = +prompt('Введите число 1');
        let b = +prompt('Введите число 2');
        let result;

        switch (operation) {
           
            case 1: {
                result = sum(a, b);
                break;
            };
            case 2: {
                result = sub(a, b);
                break;
            };
            case 3: {
                result = multi(a, b);
                break;
            };
            default: {
                result = div(a, b);
            };
        };

        consoleResult(result);

    } else {
        return 'Нет!'
    };    
};    
