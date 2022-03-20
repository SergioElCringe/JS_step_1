// 1 задание
let arrNumbers = [];

function addNumberToArr(num) {
	num.length = 0;
	const index = +prompt('Введите число');
	for (let i = 1; num.length < index; i++) {
		num.push(i)
	}
	return num
}

function showEvenNumber(num) {
	if (num.length) {
		let evenNumber = num.filter(e => {
			if (e % 2) {
				return e
			}
		})
		console.log(`Нечётные числа: ${evenNumber}`);
	}
}
function showOddNumber(num) {
	if (num.length) {
		let evenNumber = num.filter(e => {
			if (!(e % 2)) {
				return e
			}
		})
		console.log(`Чётные числа: ${evenNumber}`);
	}
}
//========================================================================================================================================================
// 2 задание
function createSimpleNumbers(maxNum) {
	for (let i = 2; i <= maxNum; i++) {
		const arrIndex = [];
		for (let y = 2; y <= i; y++) {
			arrIndex.push(i % y)
		}
		arrIndex.pop();
		if (arrIndex.every(elem => elem !== 0)) {
			console.log(`Число: ${i}`);
		}
	}
	return
}

function getMaxSimpleNumber() {
	const maxNum = +prompt('Введи максимальный диапозон проверки простых чисел')
	return createSimpleNumbers(maxNum)
}
//========================================================================================================================================================
// 3 задание
function startGame() {
	const skyNet = RandomNumber();
	console.log('Я загадал число.');
	let rounNumber = 3;
	while (rounNumber && round(skyNet, rounNumber) !== 0) {
		--rounNumber
	}
	if (!rounNumber) {
		const numResult = skyNet.join('');
		console.log(`Вы проиграли\n
Загаданное число: ${numResult}`);
	}
}
/**
 * Мрак, но работает 
 * */
function round(skyNet, rounNumber) {
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
	return writeResultGame(bull, cow, userNumber)
}

function writeResultGame(bull, cow, userNumber) {
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
}

function RandomNumber() {
	do {
		num = createRandomNum(10000);
		num = num.toString();
		num = [...num];
		num = checkUnique(num);
	} while (num.length !== 4)
	return num
}

function checkUnique(arr) {
	let result = [];
	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}
	return result;
}

function createRandomNum(maxNum) {
	let randomNum = Math.floor(Math.random() * maxNum);
	// randomNum = randomNum.toString();
	return randomNum
}
