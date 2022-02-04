let num1 = prompt('Введите 1ое число:');
let degr = prompt('Введите 2ое число:');

function resultCalculations(num1, degr) {
    if (degr === 0) {
        return console.log(1);
    } else {
        const result = num1 * resultCalculations(num1, degr - 1);
        return console.log(result);
    };
};

resultCalculations(num1, degr);