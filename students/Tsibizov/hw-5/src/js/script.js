const playGame = {
    randomNumber: [],
    resultRandom: null,
    playerChoice: null,
    container: null,
    input: null,
    inforound: [],
    round: 10,

    random() {
        while (this.randomNumber.length < 4) {
            this.resultRandom = Math.floor(Math.random(0, 9) * 9);
            if (!this.randomNumber.includes(this.resultRandom)) {
            this.randomNumber.push(this.resultRandom);
            };
        };
        return this.randomNumber;
    }, 
    compare(inputValue, randomValue) {
        let bulls = 0;
        let cows = 0; 
        for (let i = 0; i < 4; i++) {
            if (+inputValue[i] === randomValue[i]) {
                bulls++;
            }
            else if (randomValue.includes(+inputValue[i])) {
                cows++;
            };
        };
        this.inforound.push({
            bulls: bulls,
            cows: cows,
            choice: inputValue,
            round: --this.round,
        });
        
        this.render();

        return bulls === 4 ? true : false;
    },
    render() {
        let templateAll = '';
        this.inforound.forEach(item => templateAll += this.getTemplate(item));
        this.container.innerHTML = templateAll;
    },
    getTemplate(item) {
        return `
        <div class="result-round">
            <p class="p">Выбранные числа:</p>
            <span class="span-number"><b>${item.choice}.</b></span>
            <span class="span-all">Быки: <b>${item.bulls}</b>,</span>
            <span class="span-all">Коровы: <b>${item.cows}</b>.</span>
            <span class="span-all">Осталось: <b>${item.round} попыток!</b></span>
        </div>
        `;
    },
    init() {
        this.container = document.querySelector('#result-attempt');
        this.input = document.querySelector('#input');
    }, 
    getplayerNumber() {
        this.init();
        return this.input.value;
    },
    winLose(randomNumber) {
        let result = true;
        if (this.round > 0) {
            this.playerChoice = this.getplayerNumber();
            result = this.compare(this.playerChoice, this.randomNumber)
            if (result === true) {
                alert('Поздравляю! Вы победили.');
            };
        };
        if (this.round === 0 && result === false) {
            alert(`Вы проиграли! Соперник загадал: ${this.randomNumber}`);
            };
    },
    makeMove() {
        this.random();
        this.winLose(this.randomNumber);
    },

};