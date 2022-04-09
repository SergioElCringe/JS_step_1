function random() { 
    let randomNumber = [];
    let resultRandom;

    while (randomNumber.length < 4) {
        resultRandom = Math.floor(Math.random(0, 9) * 9);
        if (!randomNumber.includes(resultRandom)) {
        randomNumber.push(resultRandom);
        }
    }
    return randomNumber;
}

function compare(playerNumber, computerNumber) {
let bulls = 0;
let cows = 0;

    for (let j = 0; j < 4; j++) {
        if (+playerNumber[j] === computerNumber[j]) { 
            bulls++;
        } else if (computerNumber.includes(+playerNumber[j])) { 
            cows++;
        };
    }
    resultCompare(playerNumber, bulls, cows);
    return bulls === 4 ? true : false;
}; 

function resultCompare(playerNumber, bulls, cows) {
    console.log (`Ваш вариант: ${playerNumber}\n
    Bulls: ${bulls}\n
    Cows: ${cows}`);
}

function game() {
    let result;
    let computerNumber = random();
    let playerNumber;
    for (let i = 1; i <= 10; i++) {
            playerNumber = [...prompt(`Соперник загадал число. Введите свои 4 числа от 0 до 9`)];
            if (playerNumber.length === 4)  {
                console.log(`Раунд: ${i}`);
                result = compare(playerNumber, computerNumber);
            
                if (result === true) {
                console.log('Победа!')
                };   
            }
            if (playerNumber.length > 4) {
                console.log(`Ошибка. Попробуйте ввести числа снова.`)
            };

    };

    if (i = 10 && result === false) {
        console.log(`Поражение! Загаданное соперником число: ${computerNumber} Попробуйте еще раз!`)
    };
};