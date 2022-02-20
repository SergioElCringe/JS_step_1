function plus(num1, num2) {
    return num1 + num2;
};

function minus(num1, num2) {
    return num1 - num2;
};

function mult(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function printResult(result) {
    return console.log('Результат:' + result);
};

function calculation(operation) {
    let num1 = +prompt('Введите 1ое число:');
    let num2 = +prompt('Введите 2ое число:');

    if (isNaN(num1) !== false || isNaN(num2) !== false) {
        return console.log('Вы ввели не числовые значения в переменные!');
    } else {
        switch(operation) {
            case 1:
                return printResult(plus(num1, num2));
            case 2:
                return printResult(minus(num1, num2));
            case 3:
                return printResult(mult(num1, num2));
            case 4:
                return (num2 = (Number(num2) !== 0) ? printResult(divide(num1, num2)) : 
                    console.log('Деление на ноль - невозможно!'));
        };
    };
};
