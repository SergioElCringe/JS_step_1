// Игра Камень ножницы бумага
const rockPapirScissors = {
    round: 1,
    getRandom() {
        return Math.floor(Math.random() * 3 + 1);
    },

    match(player) {
        const bot = this.getRandom();
        let winner = 'победил бот';
        if (player === 2 && bot === 1 || player === 3 && bot === 2 || player === 1 && bot === 3) {
            winner = 'победили вы';
        }
        else if (player === bot) {
            winner = 'ничья'
        }
        return `
        Раунд: ${this.round++}\n
        У вас ${this.getItem(player)}\n
        У бота ${this.getItem(bot)}\n
        Результат: ${winner}`
    },

    getItem(number) {
        switch (number) {
            case 1: return 'Камень';
            case 2: return 'Бумага';
            case 3: return 'Ножницы';
        }
    },

    play(variant) {
        console.log(this.match(variant));
    },
}


