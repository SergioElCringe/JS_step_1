function evenOdd(operation) {
    let num = +prompt('Введите количество элементов в массиве (n):');
    let arr = [];
    let arrEven = [];
    let arrOdd = [];
    
    for (let i = 1; i <= num; i++) {
        let el = +prompt('Введите элемент массива №' + i + ' / ' + num);
        arr.push(el);
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrEven.push(arr[i]);
        } else {
            arrOdd.push(arr[i]);
        };
    };

    switch(operation) {
        case 1:
            return console.log(arrOdd);
        case 2:
            return console.log(arrEven);
    };
};    
