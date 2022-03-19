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
	if (num.length !== 0) {
		let evenNumber = num.filter(e => {
			if (e % 2 !== 0) {
				return e
			}
		})
		console.log(`Нечётные числа: ${evenNumber}`);
	}
}
function showOddNumber(num) {
	if (num.length !== 0) {
		let evenNumber = num.filter(e => {
			if (e % 2 === 0) {
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
	console.log(skyNet);
	let indexRound = 10;
	// do {
	// 	round(skyNet);
	// 	--indexRound
	// } while (indexRound)
	round(skyNet);

}

function round(skyNet) {
	let userNumber = prompt('Пропробуй угадать число');
	userNumber = Array.from(userNumber);

	console.log(userNumber);
	let bull = 0;
	let cow = 0;
	for (let i = 0; i !== skyNet.length; i++) {
		for (let y = 0; y !== 4; y++) {
			if (skyNet[i] === userNumber[y]) {
				bull++

			} else if (0) {
				cow++
			}
		}
	}
	console.log('быков ' + bull);
	console.log('коров ' + cow);

}




function RandomNumber() {
	let num = Array.from('1234');
	// do {
	// 	num = createRandomNum(10000);
	// 	num = num.toString();
	// 	num = Array.from(num);
	// 	num = checkUnique(num);
	// } while (num.length !== 4)


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
