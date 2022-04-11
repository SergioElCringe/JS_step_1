function num(operation) {
    if (operation === 1) {
        numOne = [];

        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 0) {
                numOne.push(i);
            };
        };
        console.log(numOne);
    }else if(operation === 2) {
        numTwo =[];

        for (let i = 1; i <= 100; i++) {
            if( i % 2 !== 0) {
                numTwo.push(i);
            };
        };
        console.log(numTwo)

    };
};