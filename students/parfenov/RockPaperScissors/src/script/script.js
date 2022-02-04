
const rock = 0;
const paper = 1;
const scissors = 2;
const botWin = 'Бот победил!';
const playerWin = 'Вы победили';
const deadHeat = 'Ничья';

function getRandom() {
    return Math.floor(Math.random() * 3)
}

function getChouse() {
    const chouse = +prompt('Введите: 1 - камень, 2 - бумага, 3-ножницы');
    if (chouse === 1 || chouse === 2 || chouse === 3) {
        return chouse - 1;
    } else {
        return console.log('Вы не выбрали нужное значение. попробуйте еще раз')
    }
}

function play() {
    const playerItem = getChouse();
    const botItem = getRandom();

    switch (playerItem) {
        case rock: {
            if (botItem === rock) {
                console.log(`У вас камень у бота камень.  ${deadHeat}`);
            }
            else if (botItem === paper) {
                console.log(`У вас камень у бота бумага. ${botWin}`);
            }
            else {
                console.log(`У вас камень у бота ножницы.  ${playerWin}`);
            }
            break;
        }
        case paper: {
            if (botItem === rock) {
                console.log(`У вас бумага у бота камень.  ${playerWin}`);
            }
            else if (botItem === paper) {
                console.log(`У вас бумага у бота бумага. ${deadHeat}`);
            }
            else {
                console.log(`У вас бумага у бота ножницы.  ${botWin}`);
            }
            break;
        }
        case scissors: {
            if (botItem === rock) {
                console.log(`У вас ножницы у бота камень.  ${botWin} `);
            }
            else if (botItem === paper) {
                console.log(`У вас ножницы у бота бумага. ${playerWin}`);
            }
            else {
                console.log(`У вас ножницы у бота ножницы.  ${deadHeat}`);
            }
            break;
        }
    }
}

