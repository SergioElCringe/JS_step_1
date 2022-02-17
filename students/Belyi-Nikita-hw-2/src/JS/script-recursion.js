function recursion(number, n) {
    if (n === 1) {
        return number;
    } else {
        return number * recursion(number, n - 1);
    };
};
console.log(recursion(2, 6));

