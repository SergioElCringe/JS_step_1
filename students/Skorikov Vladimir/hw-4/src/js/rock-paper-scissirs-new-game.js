// ROCK GAME 
function play(num) {
  const gameRockPaperScissors = {
    round: 1,
    pc: null,
    player: null,
    winner: null,
    name: ['Камень', 'Ножницы', 'Бумага'],

    startGame(player) {
      this.pc = Math.floor(Math.random() * 3 + 1);
      this.player = player ? player : +prompt("Выберите 1 или 2 или 3");
      this.match();
      this.getChampion();
    },

    match() {
      const { pc, player } = this;
      if ((player === 1 && pc === 2) || (player === 2 && pc === 3) || (player === 3 && pc === 1)) {
        this.winner = 'Игрок';
      } else if (player === pc) {
        this.winner = 'Ничья';
      } else {
        this.winner = 'Компьютер'
      }
    },
    
    getChampion() {
      const { pc, player, winner, name } = this;
      console.log(`
        РАУНД: ${ this.round++ }\n
        Результат:\n
        ИГРОК: ${ name[player -1] }\n
        Bot: ${ name[pc - 1] }\n
    
        Победитель: ${ winner }!
      `)
    },
  };
  
  gameRockPaperScissors.startGame(num);
};