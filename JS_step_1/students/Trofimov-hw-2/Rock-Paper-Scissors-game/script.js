function randomNumber() {
    let result = Math.floor(Math.random() * 3 + 1);
    return result;
};

function gameResult(action) {
    if (action === 1) {
        if (randomNumber() === 3) {
            return console.log('Камень vs Бумага. Вы проиграли!');
        } else if (randomNumber() === 2) {
            return console.log('Камень vs Ножницы. Вы выиграли!');
        } else if (randomNumber() === 1) {
            return console.log('Камень vs Камень. Ничья!');
        };    
    } else if (action === 2) {
        if (randomNumber() === 3) {
            return console.log('Ножницы vs Бумага. Вы выиграли!');
        } else if (randomNumber() === 2) {
            return console.log('Ножницы vs Ножницы. Ничья!');
        } else if (randomNumber() === 1) {
            return console.log('Ножницы vs Камень. Вы проиграли!');
        };  
    } else if (action === 3) {
        if (randomNumber() === 3) {
            return console.log('Бумага vs Бумага. Ничья!');
        } else if (randomNumber() === 2) {
            return console.log('Бумага vs Ножницы. Вы проиграли!');
        } else if (randomNumber() === 1) {
            return console.log('Бумага vs Камень. Вы выиграли!');
        };  
    };
};