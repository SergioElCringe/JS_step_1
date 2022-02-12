function arr() {
    let a = prompt('');
    let arr = a.split(" ");
    let arr1 = [], arr2 = [];
    let j = 0, k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr1[j] = arr[i];
            j++;
        } else {
            arr2[k] = arr[i];
            k++;
        };

    };
    console.log('четный массив- ' + arr1);
    console.log('Не четный массив- ' + arr2);
};