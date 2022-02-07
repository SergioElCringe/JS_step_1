var move = 0.5, move1 = 1, i = 0, k = 0;
var computer, choice;
function rand() {
    computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
        choice = 1; //камень
    } else if (computer == 1) {
        choice = 2; //ножницы
    } else {
        choice = 3; //бумага
    };
};
function end() {
    if (move == 0) {
        console.log('Общий счет за предыдущую игру ваш -' + i + ' компьютер - ' + k);
        i = 0;
        k = 0;
    }
};
function game() {
    console.log('начало игры , игра длится 3 раунда');
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
            return i = i + 1;
        } else {
            console.log('Выбор компьютера бумага - Вы проиграли');
            return k = k + 1;
        };
    } else {
        console.log('начните игру');
    };
    end(k, i);
};
function scissors() {
    rand();
    if (move >= move1) {
        console.log('Ваш выбор ножницы');
        move = move - 1;
        if (choice == 1) {
            console.log('Выбор компьютера камень - Вы проиграли');
            return k = k + 1;
        } else if (choice == 2) {
            console.log('Выбор компьютера ножницы - Ничья');
        } else {
            console.log('Выбор компьютера бумага - Победа за вами');
            return i = i + 1;
        };
    } else {
        console.log('начните игру');
    };
    end(k, i);
};
function paper() {
    rand();
    if (move >= move1) {
        console.log('Ваш выбор бумага');
        move = move - 1;
        if (choice == 1) {
            console.log('Выбор компьютера камень - Победа за вами');
            return i = i + 1;
        } else if (choice == 2) {
            console.log('Выбор компьютера ножницы - Вы проиграли');
            return k = k + 1;
        } else {
            console.log('Выбор компьютера бумага - Ничья');
        };
    } else {
        console.log('начните игру');
    };
    end(k, i);
};