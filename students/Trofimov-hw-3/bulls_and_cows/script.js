function createNum() {
    let arr_num = [];

    while (arr_num.length < 4) {
        let arr_elem = Math.floor(Math.random() * 10)
        if (arr_num.indexOf(arr_elem) < 0) {
            arr_num.push(arr_elem);
        };
    };
    
    console.log('Загаданное компьютером число: ' + arr_num)
    let user_arr = [];

    for (let i = 1; i < 3; i ++) {
        let user_num = +prompt('Введите число. Попытка №' + i);
        
        let elem1 = Math.floor(user_num / 1000);
        let elem2 = Math.floor((user_num - elem1*1000) / 100);
        let elem3 = Math.floor((user_num - elem1*1000 - elem2*100) / 10);
        let elem4 = (user_num - elem1*1000 - elem2*100 - elem3*10);
    };
    return arr_num
}