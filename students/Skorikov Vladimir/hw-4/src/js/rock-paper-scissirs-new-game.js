// ROCK GAME 
const gameRockPaperScissors = {
  round: 1,
  play(user) {
   console.log(this.match(user));
  },
  rnd() {
    return Math.floor(Math.random() * 3 + 1); //1 2 3
  },
  match(player) {
    let winner = 'Bot';
    const bot = this.rnd();

    if ((player === 1 && bot === 2) || (player === 2 && bot === 3) || (player === 3 && bot === 1)) {
      winner = 'Player';
    } else if (player === bot) {
      winner = 'Both';
    }

    return `
      РАУНД: ${ this.round++ }\n
      Результат:\n
      ИГРОК: ${ this.getName(player) }\n
      Bot: ${ this.getName(bot) }\n
  
      Победитель: ${ winner }!
    `
    },
    getName(val) {
      switch (val) {
        case 1: return 'Камень';
        case 2: return 'Ножницы';
        case 3: return 'Бумага';
      };
    }
};