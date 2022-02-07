function input() {
    var a = Number(prompt('Введите число'));
    var b = Number(prompt('Ввведите степень числа'));
    console.log(stepen(a, b));
};

function stepen(a, b) {
    let result = a;
    if (!b) {
        return 1;
    }
    else if (b > 1) {
        return a * stepen(a, b - 1);
    };
    return result;
};