function random() {
    let pcChoice = Math.floor(Math.random(1, 3) * 3 + 1);
    return pcChoice;
}

function Play(variant) {
    if (variant === 1) {
        if (random() > 2) {
            return console.log('Камень vs Бумага. Поражение!');
        };
        if (random() > 1 && (random()) < 3) {
            return console.log('Камень vs Ножницы. Поражение!');
        };
        if (random() < 2) {
            return console.log('Камень vs Камень. Ничья!');
        };
    };
    if (variant === 2) {
        if (random() < 2) {
            return console.log('Ножницы vs Камень. Поражение!');
        };
        if (random() > 2) {
            return console.log('Ножницы vs Бумага. Ппобеда!');
        };
        if (random() > 1 && random() < 3) {
            return console.log('Ножницы vs Ножницы. Ничья!');
        };
    };
    if (variant === 3) {
        if (random() < 3 && (random()) > 1) {
            return console.log('Бумага vs Ножницы. Поражение');
        };
        if (random() < 2) {
            return console.log('Бумага vs Камень. Поражение!');
        }
        if (random() > 2) {
            return console.log('Бумага vs Бумага. Ничья!');
        };
    };
    
};