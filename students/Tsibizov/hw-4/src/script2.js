function play() {
    const game = {
        play: true,
        rounds: 10,
        goal: null,

        init() {
            this.goal = this.pushNumber();
            console.log(this.goal);
            this.gameStart();
        },
        gameStart() {
            while (this.play) {
                if (this.rounds) {
                    let userNumber = [...prompt('Введите число')];
                    this.play = this.check(this.goal, userNumber);
                    console.log(this.play ? `${--this.rounds}` : `Игрок выиграл! ${this.goal}`);
                } else {
                    console.log(`Игрок проиграл! ${this.goal}`);
                    play = false;
                }
            }
        },
        getRandom() {
            return Math.floor(Math.random() * 10);
        },
        pushNumber() {
            const result = [];
            while (result.length < 4) {
                const randomNumber = this.getRandom();
                if (!result.includes(randomNumber)) {
                    result.push(randomNumber);
                }
            }
            return result;
        },
        check(riddle, userNumber) {
            let bulls = 0;
            let cows = 0;
            for (i = 0; i < 4; i++) {
                if (riddle[i] === +userNumber[i]) {
                    bulls++;
                } else if (riddle.includes(+userNumber[i])) {
                    cows++;
                }
            }
            this.roundResult(bulls, cows, userNumber)
            return bulls === 4 ? false : true;
        },
        roundResult(bulls, cows, userNumber) {
            console.log(`
                Игрок: ${userNumber}\n
                Быки: ${bulls}\n
                Коровы: ${cows}\n
                `);
        },
    }
    game.init();
};