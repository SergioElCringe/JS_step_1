function randomNum() {
    return Math.floor(Math.random() * 10);
};

function gameProcess() {
    const computerNumber = computerNum();
    let rounds = 10;
    let play = true;
    console.log(computerNumber);

    while (play) {
        if (rounds) {
            let playerNumber = [...prompt('Введите 4 неповторяющиеся цифры:')];
            play = checkFunc(computerNumber, playerNumber);
            
            console.log(play ? `Осталось играть: ${ --rounds } раундов` : `Вы выиграли! Правильный ответ: ${computerNumber}`);
        } else {
            console.log('Вы проиграли! Правильный ответ: ' + computerNumber);
            play = false;
        };
    };
};

function computerNum() {
    const result = [];
    while (result.length < 4) {
        const randomNumber = randomNum();
        if (result.indexOf(randomNumber) < 0 ) {
            result.push(randomNumber);
        };
    };
    return result;
};

function checkFunc(computerNumber, playerNumber) {
    let bulls = 0;
    let cows = 0;

    for(let i = 0; i < 4; i++) {
        if (computerNumber[i] === +playerNumber[i]) {
            bulls++;
        } else if (computerNumber.includes(+playerNumber[i])) {
            cows++;
        };
    };

    getHint(bulls, cows, playerNumber);
    return bulls === 4 ? false : true;
};

function getHint(bulls, cows, playerNumber) {
    return console.log(`
    В числе: ${ playerNumber }\n
    Быки: ${ bulls }\n
    Коровы: ${ cows }`);
};