function game(action) {
    const gameEngine = {
        player : null,
        computerNum : null,
        gameResult : null,

        randomNumber() {
            this.computerNum = Math.floor(Math.random() * 3 + 1);
        },

        playerNumber() {
            this.player = action;
        },
        
        gameProcess(action) {
            let { player, computerNum, gameResult } = this;
            if (player === 1 && computerNum === 2) {
                gameResult = `Вы выиграли. Камень бъёт ножницы!`;
            } else if (player === 2 && computerNum === 3) {
                gameResult = `Вы выиграли. Ножницы бъют бумагу!`;
            } else if (player === 3 && computerNum === 1) {
                gameResult = `Вы выиграли. Бумага бъёт камень!`;
            } else if (player === 1 && computerNum === 3) {
                gameResult = `Вы проиграли. Бумага бъёт камень!`;
            } else if (player === 2 && computerNum === 1) {
                gameResult = `Вы проиграли. Камень бъёт ножницы!`;
            } else if (player === 3 && computerNum === 2) {
                gameResult = `Вы проиграли. Ножницы бъют бумагу!`;
            } else if (player === computerNum) {
                gameResult = `Ничья!`;
            };
            this.gameResult = gameResult;
        },

        showResult() {
            console.log(this.gameResult);
        },

        startGameProcess(action) {
            this.randomNumber();
            this.playerNumber();
            this.gameProcess(action);
            this.showResult();
        },
    };

    gameEngine.startGameProcess(action);
};
