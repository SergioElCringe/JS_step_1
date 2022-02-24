function gamePlay() {
    const gameBody = {
        playerNum : null,
        computerNum : null,
        bulls : 0,
        cows : 0,
        rounds : 9,
        gameResult : null,
        gameStop : false,
        
        computerNumber() {
            const resultArr = [];
            while (resultArr.length < 4) {
                const num = Math.floor(Math.random() * 10);
                if (resultArr.indexOf(num) < 0) {
                    resultArr.push(num);
                };
            };
            this.computerNum = resultArr;
        },

        playerNumber() {
            const playerNum = prompt('Введите 4 неповторяющиеся цифры:');
            this.playerNum = [...playerNum];
            this.playerNum = this.playerNum.map(parseFloat);
        },

        checkAttempt() {
            for (let i = 0; i < 4; i++) {
                if (this.computerNum[i] === +this.playerNum[i]) {
                    this.bulls++;
                } else if (this.computerNum.includes(+this.playerNum[i])) {
                    this.cows++;
                };
            };
        },

        gameProcess() {
            if (this.bulls === 4) {
                this.gameResult = `Поздравляем. Вы выиграли!\nПравильный ответ: ${this.computerNum}`;
                console.log(this.gameResult);
                this.gameStop = true;
            } else if (this.rounds < 0) {
                this.gameResult = `Упппссс. Вы проиграли!\nПравильный ответ: ${this.computerNum}`;
                console.log(this.gameResult);
                this.gameStop = true;
            } else {
                this.gameResult = `Быки: ${ this.bulls }, Коровы ${ this.cows }`;
                console.log(this.gameResult);
                if (this.rounds >= 0 && !this.gameStop) {
                    console.log(`У вас осталось ${ this.rounds } попыток`);
                };
            };
        },

        resetResults() {
            this.cows = 0;
            this.bulls = 0;
        },

        gameStart() {
            this.computerNumber();
            console.log(this.computerNum);
            while (!this.gameStop) {
                this.playerNumber();
                this.checkAttempt();
                this.gameProcess();
                this.resetResults();
                --this.rounds;
            };
        },
    };
    gameBody.gameStart();
};
