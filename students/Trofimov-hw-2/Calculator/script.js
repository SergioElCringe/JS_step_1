function plus(num1, num2) {
    let result = Number(num1 + num2);
    return result;
};

function minus(num1, num2) {
    let result = Number(num1 - num2);
    return result;
};

function mult(num1, num2) {
    let result = Number(num1 * num2);
    return result;
};

function divide(num1, num2) {
    let result = Number(num1 / num2);
    return result;
};

function printResult(result) {
    return console.log('Результат:' + result);
};

function calculation(operation) {
    let num1 = prompt('Введите 1ое число:');
    let num2 = prompt('Введите 2ое число:');

    if (isNaN(num1) !== false && isNaN(num2) !== false) {
        return console.log('Вы ввели не числовые значения в переменные!');
    } else {
        if (operation === 1) {
            return printResult(plus(num1, num2));
        } else if (operation === 2) {
            return printResult(minus(num1, num2));
        } else if (operation === 3) {
            return printResult(mult(num1, num2));
        } else if (operation === 4) {
            return (num2 = (Number(num2) !== 0) ? printResult(divide(num1, num2)) : 
            console.log('Деление на ноль - невозможно!'));
        };
    };
};
