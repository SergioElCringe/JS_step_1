function getEven(arr) {
    return arr.filter(el => !(el % 2));
};

function getOdd(arr) {
    return arr.filter(el => !!(el % 2));
};