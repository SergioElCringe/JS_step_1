function rand() {
    return Math.floor(Math.random() * 3 + 1);
};
function Func(num) {
    switch (num) {
        case 1:
            return 'Камень';
        case 2:
            return 'Бумага';
        case 3:
            return 'Ножницы';
    }
};
function result(num) {
    const player = Func(num);
    const comp = rand();
    const computerName = Func(comp);
    let winner = ' Вы проиграли,компьютер победил'
    if ((num === 1 && comp === 2) || (num === 2 && comp === 3) || (num === 3 && comp === 1)) {
        winner = ' Вы победили ,компьютер проиграл';
    } else if (num === comp) {
        winner = ' Ничья'
    };
    console.log('компьютер выбрал ' + computerName + ' ваш выбор ' + player   + winner);
};