function primeNumbers() {
    let arr = [];
    
    findNumber:
    for (let i = 0; i < 100; i++) {
        for (let divider = 2; divider < i; divider++) {
            if (i % divider == 0) continue findNumber;
        };
        arr.push(i);
    };
    return console.log(arr);
};
