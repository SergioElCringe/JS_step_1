
function calculator(op) {
    if (op == 1 || op == 2 || op == 3 || op == 4) {
        let num1 = Number(prompt('Введите первое число:'));
        let num2 = Number(prompt('Введите второе число:'));
        let result;
        switch (op) {
            case 1: {
                result = plus(num1, num2);
                break;
            };
            case 2: {
                result = minus(num1, num2);
                break;
            };
            case 3: {
                result = mult(num1, num2);
                break;
            };
            case 4:
                result = divide(num1, num2);
                break;
        };
        output(result);
    };
};
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
    if (num2 == 0) {
        return 'на ноль делить нельзя'
    }
    else {
        return num1 / num2;
    }
};
function output(result) {
    if (result) {
        console.log(result);
    } else if (result == 0) {
        console.log('0');
    }
}
