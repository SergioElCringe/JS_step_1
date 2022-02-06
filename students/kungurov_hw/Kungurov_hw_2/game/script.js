var move = 0.5, move1 = 1, i = 0, k = 0;
var computer, choice;
function rand() {
    computer = Math.random();
    if (computer < 0.33) {
        choice = 1; //камень
    } else if (computer < 0.66) {
        choice = 2; //ножницы
    } else {
        choice = 3; //бумага
    };
};
function game() {
    console.log('начало игры');
    move = 3;
};
function rock() {
    rand();
    if (move >= move1) {
        console.log('Ваш выбор камень');
        move = move - 1;
        if (choice == 1) {
            console.log('Выбор компьютера камень - Ничья');
        } else if (choice == 2) {
            console.log('Выбор компьютера ножницы - Победа за вами');
            i = i + 1;
        } else {
            console.log('Выбор компьютера бумага - Вы проиграли');
            k = k + 1;
        };
    } else {
        console.log('начните игру');
    };
    if (move == 0) {
        console.log('Общий счет за игру ваш -' + i + ' компьютер - ' + k);
        k = 0;
        i = 0;
    };
};
function scissors() {
    rand();
    if (move >= move1) {
        console.log('Ваш выбор ножницы');
        move = move - 1;
        if (choice == 1) {
            console.log('Выбор компьютера камень - Вы проиграли');
            k = k + 1;
        } else if (choice == 2) {
            console.log('Выбор компьютера ножницы - Ничья');
        } else {
            console.log('Выбор компьютера бумага - Вы победили');
            i = i + 1;
        };
    } else {
        console.log('начните игру');
    };
    if (move == 0) {
        console.log('Общий счет за игру ваш -' + i + ' компьютер - ' + k);
        k = 0;
        i = 0;
    };
};
function paper() {
    rand();
    if (move >= move1) {
        console.log('Ваш выбор бумага');
        move = move - 1;
        if (choice == 1) {
            console.log('Выбор компьютера камень - Вы победили');
            i = i + 1;
        } else if (choice == 2) {
            console.log('Выбор компьютера ножницы - Вы проиграли');
            k = k + 1;
        } else {
            console.log('Выбор компьютера бумага - Ничья');
        };
    } else {
        console.log('начните игру');
    };
    if (move == 0) {
        console.log('Общий счет за игру ваш -' + i + ' компьютер - ' + k);
        k = 0;
        i = 0;
    };
};
