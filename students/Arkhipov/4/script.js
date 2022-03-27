//камень, ножницы, бумага
function startRpsGame(select) {

	const rpsGame = {
		playerSelect: null,
		computerSelect: null,
		userSelect(select) {
			this.playerSelect = select;
			this.changeNumberToChoise();
			this.gameResult(this.playerSelect, this.computerSelect)
		},

		gameResult(playerOne, playerTwo) {
			if (playerOne === "камень" && playerTwo === 'камень') {
				this.writeResult('Ничья')
			}
			else if (playerOne === "камень" && playerTwo === 'ножницы') {
				this.writeResult('Вы выиграли')
			}
			else if (playerOne === "камень" && playerTwo === 'бумага') {
				this.writeResult('Вы проиграли')
			}
			else if (playerOne === "ножницы" && playerTwo === 'ножницы') {
				this.writeResult('Ничья')
			}
			else if (playerOne === "ножницы" && playerTwo === 'бумага') {
				this.writeResult('Вы выиграли')
			}
			else if (playerOne === "ножницы" && playerTwo === 'камень') {
				this.writeResult('Вы проиграли')
			}
			else if (playerOne === "бумага" && playerTwo === 'камень') {
				this.writeResult('Вы выиграли')
			}
			else if (playerOne === "бумага" && playerTwo === 'ножницы') {
				this.writeResult('Вы проиграли')
			}
			else {
				this.writeResult('Ничья')
			}
		},

		changeNumberToChoise() {
			let numCom = this.getRandomNum(3);
			if (0 <= numCom <= 2) {
				switch (numCom) {
					case 0: { this.computerSelect = 'камень' } break;
					case 1: { this.computerSelect = 'ножницы' } break;
					default: { this.computerSelect = 'бумага' };
				}
			}
		},

		getRandomNum(numMax) {
			return Math.floor(Math.random() * numMax);
		},

		writeResult(result) {
			console.log(`Результат: ${result}`);
		}
	};
	rpsGame.userSelect(select)
}

//========================================================================================================================================================
// быки и коровы
function startBullsAndCowsGame() {
	const bullsAndCowsGame = {

		startGame() {
			const skyNet = this.RandomNumber();
			console.log('Я загадал число.');
			let rounNumber = 10;
			while (rounNumber && this.round(skyNet, rounNumber) !== 0) {
				--rounNumber
			}
			if (!rounNumber) {
				const numResult = skyNet.join('');
				console.log(`Вы проиграли\n
Загаданное число: ${numResult}`);
			}
		},

		round(skyNet, rounNumber) {
			console.log(`Раунд № ${rounNumber}`);
			let userNumber = prompt('Пропробуй угадать число');
			userNumber = [...userNumber];
			let bull = 0;
			let cow = 0;
			skyNet.forEach(e => {
				for (let i = 0; i < skyNet.length; i++) {
					if (e === userNumber[i] && skyNet[i] === userNumber[i]) {
						bull++
					} else if (e === userNumber[i]) {
						cow++
					}
				}
			});
			return this.writeResultGame(bull, cow, userNumber)
		},

		RandomNumber() {
			do {
				num = this.createRandomNum(10000);
				num = num.toString();
				num = [...num];
				num = this.checkUnique(num);
			} while (num.length !== 4)
			return num
		},

		checkUnique(arr) {
			let result = [];
			for (let str of arr) {
				if (!result.includes(str)) {
					result.push(str);
				}
			}
			return result;
		},

		createRandomNum(maxNum) {
			let randomNum = Math.floor(Math.random() * maxNum);
			return randomNum
		},

		writeResultGame(bull, cow, userNumber) {
			let textBull;
			let textCow;
			let finishGame = 1;
			const user = userNumber.join('');
			bull === 1 ? textBull = 'бык' : textBull = 'быка'
			cow === 1 ? textCow = 'корова' : textCow = 'коровы'
			if (bull > 0 && cow > 0) {
				console.log(`Подсказка: ${cow} ${textCow}, ${bull} ${textBull} \n
Игрок: ${user}`);
			} else if (bull < 4 && 0 < bull) {
				console.log(`Подсказка: ${bull} ${textBull}\n
Игрок: ${user} `);
			} else if (cow > 0) {
				console.log(`Подсказка: ${cow} ${textCow}\n
Игрок: ${user}`);
			} else if (bull === 4) {
				console.log(`Вы победили !!!\n
Игрок: ${user}`);
				finishGame = 0;
			} else {
				console.log('Неугадал. Попробуй ещё раз');
			}
			return finishGame
		},
	};
	bullsAndCowsGame.startGame()
}

