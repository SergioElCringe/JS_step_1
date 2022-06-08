function game(num) {
    const rps = {
        winner: null,
        computer: null,
        player: null,
        names: ['Камень', 'Ножницы', 'Бумага'],
        startGame(player) {
            this.computer = Math.floor(Math.random() * 3 );
            this.player = player;
            this.test();
            this.result();
        },
        test() {
            const { computer, player } = this;
            if ((player === 0 && computer === 1) || (player === 1 && computer === 2) || (player === 2 && computer === 0)) {
                this.winner = ' Вы победили!';
            } else if (player === computer) {
                this.winner = ' Ничья!';
            } else {
                this.winner = 'Вы проиграли!';
            }
        },
        result() {
            const { winner, player, computer, names } = this;  
            console.log(`
            ${ winner }\n
            Player: ${ names[player] }\n
            Computer: ${ names[computer] }\n
          `);
        },
};
rps.startGame(num);
};