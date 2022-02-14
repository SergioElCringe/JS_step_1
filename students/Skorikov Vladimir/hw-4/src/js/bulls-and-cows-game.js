// Bulls and Cows - game!
const bullsAndCows = {
  game() {
    const bot = this.getNumber(); // компьютер загадл число [1, 2, 3, 4]
    console.log(bot);
    let rounds = 10;
    let play = true;
  
    while (play) {
      if (rounds) {
        let userVariant = [...prompt('Введите 4 цифры, которые на Ваш взгляд загадал компьютер!')];
        play = this.check(bot, userVariant);
        console.log(play ? `${ --rounds } turns left` : `Победил игрок! ${ bot }`);
      } else {
        console.log(`Игрок проиграл! ${ bot }`);
        play = false;
      }
    }
  },
  randomize() {
    return Math.floor(Math.random() * 10);
  },
  check(bot, userVariant) {
    let bulls = 0;
    let cows = 0;
  
    for (let i = 0; i < 4; i++) {
      if (bot[i] === +userVariant[i]) {
        bulls++;
      } else if (bot.includes(+userVariant[i])) {
        cows++;
      }
    }
  
    this.getHint(bulls, cows, userVariant);
  
    return bulls === 4 ? false : true;
  },
  getHint(bulls, cows, userVariant) {
    console.log(`
      User: ${ userVariant }\n
      bulls: ${ bulls }\n
      cows: ${ cows }\n
    `);
  },
  getNumber() {
    const result = [];
    while (result.length < 4) {
      const rndNumber = this.randomize();
      if (!result.includes(rndNumber)) {
        result.push(rndNumber);
      }
    }
    return result;
  }
};