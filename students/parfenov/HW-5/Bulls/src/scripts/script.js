function randomize() {
    return Math.floor(Math.random() * 10);
}

const game = {
    playInput: document.querySelector('.game-form__input'),
    goal: null,
    rounds: 0,
    play: true,
    history: [],
    output: document.querySelector('.wrapper-result'),
    userVariantEliment: document.createElement("div"),
    bullsEliment: document.createElement("div"),
    cowsEliment: document.createElement("div"),
    roundsEliment: document.createElement("div"),


    init() {
        this.goal = this.getNumber();
        this.rounds = 10;
        console.log(this.goal);
        this.output.innerHTML = '';
    },

    getNumber() {
        const result = [];
        while (result.length < 4) {
            const rndNumber = randomize();
            if (!result.includes(rndNumber)) {
                result.push(rndNumber);
            };
        };
        return result;
    },

    process() {
        if (this.rounds) {
            let userVariant = [...this.playInput.value];
            this.playInput.value = null;
            this.playInput.focus();
            this.play = this.check(this.goal, userVariant);
            if (this.play) {
                console.log(`${this.rounds--} turns left`)
            } else {
                console.log(`User wins! ${this.goal}`);
                this.winRender(this.output, this.goal, this.rounds, this.play);
                console.log(this.history);
            };

        } else {
            console.log(`User lost! ${this.goal}`);
            this.winRender(this.output, this.goal, this.rounds, this.play);
            console.log(this.history);
            this.play = false;
        };
    },

    check(riddle, userVariant) {
        let bulls = 0;
        let cows = 0;

        for (let i = 0; i < 4; i++) {
            if (riddle[i] === +userVariant[i]) {
                bulls++;
            } else if (riddle.includes(+userVariant[i])) {
                cows++;
            };
        };

        this.history.push({
            userVariant,
            bulls,
            cows
        });
        this.ResultRendering(this.output, bulls, cows, this.rounds, userVariant);
        this.getHint(bulls, cows, userVariant);

        return bulls === 4 ? false : true;
    },


    ResultRendering(elem, bulls, cows, round, userVariant) {
        this.userVariantEliment.innerHTML += `
            <p>
                ${userVariant}
            </p>`;
        this.bullsEliment.innerHTML += `
        <p>
            ${bulls}
        </p>`;
        this.cowsEliment.innerHTML += `
        <p>
            ${cows}
        </p>`;

        this.roundsEliment.innerHTML += `
        <p>
            ${round}
        </p>`;

        elem.innerHTML = `
        <div class="text">
            <div class = "user-history">
                <p>
                    User:
                </p>
                ${this.userVariantEliment.innerHTML}
            </div>
            <div>
                <p>
                    Bulls: 
                </p>
                ${this.bullsEliment.innerHTML}
            </div>
            <div>
            <p>
                Cows: 
            </p>
                ${this.cowsEliment.innerHTML}
            </div>
            <div>
            <p>
                Rounds: 
            </p>
                ${this.roundsEliment.innerHTML}
            </div>
        </div> `;
    },

    winRender(elem, goal, rounds, play) {
        let wins = 'lose';
        if (rounds && !play) {
            wins = 'win';
        };
        return elem.innerHTML = `
        <div class="text">
            <p>
                You ${wins}!!!
            </p>
            <p>
                The number is ${goal}
            </p>
            <button class="restart-btn" onclick="game.restart(game.output)">
                Restart
            </button>
        </div> `;
    },

    restart(elem) {
        elem.innerHTML = `
        <div class="text">
            <p>
               Let's start, again
            </p>
        </div> `;
        this.init()
        this.bullsEliment.innerHTML = ``;
        this.cowsEliment.innerHTML = ``;
        this.userVariantEliment.innerHTML = ``;
        this.roundsEliment.innerHTML = '';
    },

    // Оставил вывод в консоль для роверки результата, в последситвии можно удалить
    getHint(bulls, cows, userVariant) {
        console.log(`
          User: ${userVariant}\n
          bulls: ${bulls}\n
          cows: ${cows}\n
        `);
    },




};
game.init();

