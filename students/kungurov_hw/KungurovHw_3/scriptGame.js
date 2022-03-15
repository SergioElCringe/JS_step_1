let bot = botNumber();
function randomize() {
    return Math.floor(Math.random() * 10);
  };
  function botNumber() {
    const result = [];
    while (result.length < 4) {
      const rndNumber = randomize();
      if (!result.includes(rndNumber)) {
        result.push(rndNumber);
      }
    }
    return result;
  };
function input() {
    const playernum = prompt('Введите число из 4 цифр ,которые не будут повторяться');
    const player = Array.from(String(playernum), Number);
    console.log("Ваше число: " + playernum);
    return player;
};
function gameInfo() {
    let c = 0;
    let b = 0;
    const playerNumber = input();
    for (i = 0; i <= bot.length - 1; i++) {
        for (j = 0; j <= playerNumber.length - 1; j++) {
            if (bot[i] == playerNumber[j] && i == j) {
                b++;
            }
            else if (bot[i] == playerNumber[j] && i != j) {
                c++;
            };
        };
    };
    console.log(c + ': Коров ' + b + ': Быков');
    return b;
};
function game() {
    let k = 10;
    while (k >= 1) {
        let b = gameInfo();
        if (b === 4) {
            bot = botNumber();
            return console.log('Вы выиграли');
        };
        console.log(`у вас осталось ${k - 1} попыток`);
        k--;
    };
    console.log("Компьютер загадал:" + bot);
    console.log("Вы проиграли");
    bot = botNumber();
};