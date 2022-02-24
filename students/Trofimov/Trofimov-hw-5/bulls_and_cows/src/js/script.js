function randomNum() {
    return Math.floor(Math.random() * 10);
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

var computerNumber = computerNum();

function gameProcess() {
    let playerNumber = document.querySelector('#player').value;
    
    let arrPlayerNumber = [];
    for (let i = 0; i < 4; i++) {
        let playerNumberElement = parseInt(playerNumber.substr(i, 1));
        arrPlayerNumber.push(playerNumberElement);
    };
    console.log(arrPlayerNumber);
    checkFunc(arrPlayerNumber);
};


function checkFunc(playerAttempt) {
    let bulls = 0;
    let cows = 0;
    let rounds = parseInt(document.querySelector('.rounds_number').innerHTML);

    for(let i = 0; i < 4; i++) {
        if (computerNumber[i] === +playerAttempt[i]) {
            bulls++;
        } else if (computerNumber.includes(+playerAttempt[i])) {
            cows++;
        };
    };

    rounds--;
    document.querySelector('.rounds_number').innerHTML = rounds;

    if (rounds == 0 || bulls == 4) {
        let status = ' проиграли :( ';
        if (bulls == 4) {
            status = ' выиграли :) ';
        };
        endGame(status);
    };
    writeTurn(bulls, cows, playerAttempt, rounds);
};

function writeTurn(bulls, cows, playerAttempt, rounds) {
    let table = document.querySelector('.results_table');
    let newLine = document.createElement('p');
    newLine.innerHTML = `${ 10 - rounds}. ${ playerAttempt } Быков: ${ bulls } Коров: ${ cows }`;
    table.appendChild(newLine);
};

function endGame(status) {
    document.querySelector('.answer_number').innerHTML = computerNumber;
    alert('Вы ' + status + 'Загаданное число: ' + computerNumber);
};

document.getElementById("clearButton").onclick = function(e) {
    document.getElementById("player").value = "";
};
