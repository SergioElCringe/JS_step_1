function inputNumbers() {
    let num1 = +prompt('Введите 1ое число:');
    let degr = +prompt('Введите 2ое число:');
    console.log('Результат: ' + resultCalculations(num1, degr));
}


function resultCalculations(num1, degr) {
    let result = num1;

    if (!degr) {
        result = 1;
    } else {
        result = result * resultCalculations(num1, degr - 1);
    };
    return result;
};