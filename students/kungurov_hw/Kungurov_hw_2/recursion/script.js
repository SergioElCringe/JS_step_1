function input() {
    let a = Number(prompt('Введите число'));
    let b = Number(prompt('Ввведите степень числа'));
    console.log(stepen(a, b));
};

function stepen(a, b) {
    if (b >= 0) {
        return !b ? 1 : a * stepen(a, b - 1);
    };
};