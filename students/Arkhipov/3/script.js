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
	let random = createRandomNum(10000);
	// проверку строчку удалить

	let skyNet = Array.from(random);
	// skyNet = checkUnique(skyNet)
	// if (skyNet.length !== 4) {

	// }
	console.log(random);
}

// function checkStrLength(str) {
// 	if (str.length !== 4) {

// 	}
// }
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
