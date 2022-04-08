// Калькулятор
let a, b, result;

function makeMathOperation(operator) {
	if (operator === 1 || operator === 2 || operator === 3 || operator === 4) {
		getNumbers()
		switch (operator) {
			case 1: { result = summ(a, b) } break;
			case 2: { result = substr(a, b) } break;
			case 3: { result = multipl(a, b) } break;
			default: { result = divide(a, b) };
		};
		writeResult(result);
	}
}

function getNumbers() {
	a = +prompt("Enter first number");
	b = +prompt("Enter second number");
	return a, b
};
function writeResult(result) {
	console.log(`Результат: ${result}`);
};
function summ(a, b) {
	return a + b
};
function substr(a, b) {
	return a - b;
};
function multipl(a, b) {
	return a * b;
};
function divide(a, b) {
	if (b !== 0) {
		return a / b;
	}
	return "Ошибка. Деление на ноль"
};
//========================================================================================================================================================
// Игра Камень, ножницы, бумага

let playerSelect;
let computerSelect;

function userSelect(select) {
	playerSelect = select;
	changeNumberToChoise();
	gameResult(playerSelect, computerSelect)
};

function gameResult(playerOne, playerTwo) {
	if (playerOne === "камень" && playerTwo === 'камень') {
		writeResult('Ничья');
	}
	else if (playerOne === "камень" && playerTwo === 'ножницы') {
		writeResult('Вы выиграли');
	}
	else if (playerOne === "камень" && playerTwo === 'бумага') {
		writeResult('Вы проиграли');
	}
	else if (playerOne === "ножницы" && playerTwo === 'ножницы') {
		writeResult('Ничья');
	}
	else if (playerOne === "ножницы" && playerTwo === 'бумага') {
		writeResult('Вы выиграли');
	}
	else if (playerOne === "ножницы" && playerTwo === 'камень') {
		writeResult('Вы проиграли');
	}
	else if (playerOne === "бумага" && playerTwo === 'камень') {
		writeResult('Вы выиграли');
	}
	else if (playerOne === "бумага" && playerTwo === 'ножницы') {
		writeResult('Вы проиграли');
	}
	else {
		writeResult('Ничья');
	}
};

function changeNumberToChoise() {
	let numCom = getRandomNum(3);
	if (0 <= numCom <= 2) {
		switch (numCom) {
			case 0: { computerSelect = 'камень' } break;
			case 1: { computerSelect = 'ножницы' } break;
			default: { computerSelect = 'бумага' };
		}
	}
};

function getRandomNum(numMax) {
	return Math.floor(Math.random() * numMax);
};
//========================================================================================================================================================
// Рекурсия
function doPower() {
	let a = +prompt('Укажите основание числа');
	let b = +prompt('Укажите степень числа');
	writeResult(stepen(a, b));
};
function stepen(a, b) {
	if (b !== 1) {
		return a * stepen(a, b - 1)
	}
	else {
		return a
	}
};