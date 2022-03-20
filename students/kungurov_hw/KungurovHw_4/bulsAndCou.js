function play() {
    const game = {
        player: null,
        pc: null,
        b: 0,
        c: 0,
        rounds: 10,
        botNumber() {
            const result = [];
            while (result.length < 4) {
                const rndNumber = Math.floor(Math.random() * 10);
                if (!result.includes(rndNumber)) {
                    result.push(rndNumber);
                }
            }
            this.pc = result;
        },
        input() {
            const playernum = prompt('Введите число из 4 цифр ,которые не будут повторяться');
            this.player = Array.from(String(playernum), Number);
            console.log('введенное число ' + playernum);
            this.b = 0;
            this.c = 0;
        },

        gameInfo() {
            for (i = 0; i <= this.pc.length - 1; i++) {
                for (j = 0; j <= this.player.length - 1; j++) {
                    if (this.pc[i] == this.player[j] && i == j) {
                        this.b++;
                    }
                    else if (this.pc[i] == this.player[j] && i != j) {
                        this.c++;
                    };
                };
            };
            console.log(this.c + ': Коров ' + this.b + ': Быков');
        },
        play() {
            this.botNumber();
            while (this.rounds >= 1) {
                this.input();
                console.log();
                this.gameInfo();
                if (this.b === 4) {
                    return console.log('Вы выиграли');
                    break;
                };
                console.log(`у вас осталось ${this.rounds - 1} попыток`);
                this.rounds--;
            };
            console.log('Компьютер загадал: ' + this.pc);
            console.log("Вы проиграли");
        },
    };
    game.play();
};