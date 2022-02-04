function randomNumber() {
    let result = Math.random() * 3;
    return result;
};

function gameResult(action) {
    if (Number(action === 1)) {
        if (Number(randomNumber()) >= 2) {
            return console.log('Камень vs Бумага. Вы проиграли!');
        } else if (Number(randomNumber()) >= 1 && Number(randomNumber()) < 2) {
            return console.log('Камень vs Ножницы. Вы выиграли!');
        } else if (Number(randomNumber()) >= 0 && Number(randomNumber()) < 1) {
            return console.log('Камень vs Камень. Ничья!');
        };    
    } else if (Number(action) === 2) {
        if (Number(randomNumber()) >= 2) {
            return console.log('Ножницы vs Бумага. Вы выиграли!');
        } else if (Number(randomNumber()) >= 1 && Number(randomNumber()) < 2) {
            return console.log('Ножницы vs Ножницы. Ничья!');
        } else if (Number(randomNumber()) >= 0 && Number(randomNumber()) < 1) {
            return console.log('Ножницы vs Камень. Вы проиграли!');
        };  
    } else if (Number(action) === 3) {
        if (Number(randomNumber()) >= 2) {
            return console.log('Бумага vs Бумага. Ничья!');
        } else if (Number(randomNumber()) >= 1 && Number(randomNumber()) < 2) {
            return console.log('Бумага vs Ножницы. Вы проиграли!');
        } else if (Number(randomNumber()) >= 0 && Number(randomNumber()) < 1) {
            return console.log('Бумага vs Камень. Вы выиграли!');
        };  
    };
};