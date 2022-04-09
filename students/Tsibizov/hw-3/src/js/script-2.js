function simpl() {
    let num1 = [];
    let num2 = true;

    for (let i = 2; i <= 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                num2 = false;
            };
        };
        if (num2) {
            num1.push(i);
        };
        num2 = true;
    };
    console.log(num1);
};