function random() {
    let pcChoice = Math.floor(Math.random(1, 3) * 3 + 1);
    return pcChoice;
}

function myGame(variant) {
    if (variant === 1) {
        if (random() > 2) {
            return console.log('У вас Камень, у соперника Бумага. Вы проиграли!');
        };
        if (random() > 1 && (random()) < 3) {
            return console.log('У вас Камень, у соперника Ножницы. Вы выиграли!');
        };
        if (random() < 2) {
            return console.log('У вас Камень, у соперника Камень. Ничья!');
        };
    };
    if (variant === 2) {
        if (random() < 2) {
            return console.log('У вас Ножницы, у соперника Камень. Вы проиграли!');
        };
        if (random() > 2) {
            return console.log('У вас Ножницы, у соперника Бумага. Вы выиграли!');
        };
        if (random() > 1 && random() < 3) {
            return console.log('У вас Ножницы, у соперника Ножницы. Ничья!');
        };
    };
    if (variant === 3) {
        if (random() < 3 && (random()) > 1) {
            return console.log('У вас Бумага, у соперника Ножницы. Вы проиграли');
        };
        if (random() < 2) {
            return console.log('У вас Бумага, у соперника Камень. Вы выиграли!');
        }
        if (random() > 2) {
            return console.log('У вас Бумага, у соперника Бумага. Ничья!');
        };
    };
    
};