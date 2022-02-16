function game(num) {
    const rps = {
        winner: null,
        pc: null,
        player: null,
        names: ['камень', 'ножницы', 'бумага'],
        startGame(player) {
            this.pc = Math.floor(Math.random() * 3 );
            this.player = player;
            this.test();
            this.result();
        },
        test() {
            const { pc, player } = this;
            if ((player === 0 && pc === 1) || (player === 1 && pc === 2) || (player === 2 && pc === 0)) {
                this.winner = ' Вы победили ,компьютер проиграл';
            } else if (player === pc) {
                this.winner = ' Ничья';
            } else {
                this.winner = 'Вы проиграли компьютер победил';
            }
        },
        result() {
            const { winner, player, pc, names } = this;  
            console.log(`
            ${ winner }\n
            Player: ${ names[player] }\n
            PC: ${ names[pc] }\n
          `);
        },
};
rps.startGame(num);
};