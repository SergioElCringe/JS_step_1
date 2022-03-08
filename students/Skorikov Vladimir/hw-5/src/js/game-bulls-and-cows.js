function play () {
  const bullsAndCows = {
    rounds: 1,
    history: [],
    secret: [],
    result: {},

    run() {
      const rounds = this.rounds;
      this.result = {
          rounds: rounds,
          answer: null,
          bulls: 0,
          cows: 0,
       };
       this.rounds++;
       this.getUserInput();
       this.checkInput();
       this.saveMove();
       this.checkEnd();
       this.getTemplate();
    },

    init() {
      this.getNumber();
      console.log('secret: ' + this.secret);
    },

    getNumber() {
      while (this.secret.length < 4) {
        const rndNumber = Math.floor(Math.random() * 10);
        if (!this.secret.includes(rndNumber)) {
          this.secret.push(rndNumber);
        }
      }
    },

    getUserInput() {
      const userVariant = document.querySelector('.variant').value;
      this.result.answer = [...userVariant].map(el => +el);
      userVariant.value = null;
    },

    checkInput() {
      this.result.answer.forEach((el, index) => {
          if (this.secret.includes(el)) {
              this.secret.indexOf(el) === index ? this.result.bulls++ : this.result.cows++;
          }
      });
    },

    saveMove() {
      this.history.push(this.result);
    },

    getTemplate() {
      const historyContainer = document.querySelector('.history');
      historyContainer.classList.remove('.history_hidden');
      const str = this.history.reduce((accum, current) => {
      const { rounds, answer, bulls, cows } = current;
      const template = `
           <tr>
             <td>${ rounds }</td>
             <td>${ answer.join('') }</td>
             <td>${ bulls }</td>
             <td>${ cows }</td>  
           </tr>
       `;
      return accum + template;
      }, '');
      historyContainer.innerHTML = str;
     },

     checkEnd() {
        if (this.result.bulls === 4) {
            document.querySelector('#result').innerHTML = '<tr><td class="winner" colspan="4">Вы победили !</td></tr>';
            document.querySelector('.history').innerHTML = "";
        } else if (this.rounds >= 12) {
            document.querySelector('#result').innerHTML = `<tr><td class="lost" colspan="4">Вы проиграли! <span>Загаданное число: ${ this.secret.join(' ') }</span></td></tr>`;
            document.getElementById("#history").innerHTML = "";
        }
     },
  };

  bullsAndCows.init();
  document.querySelector('.form__button').onclick = () => bullsAndCows.run();
};