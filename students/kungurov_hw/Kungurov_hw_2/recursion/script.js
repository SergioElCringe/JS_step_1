var a = Number(prompt('Введите число'));
var b = Number(prompt('Ввведите степень числа'));
function stepen(a, b) {
    return (b == 1) ? b : Math.pow(a, b);
};
console.log(stepen(a, b));