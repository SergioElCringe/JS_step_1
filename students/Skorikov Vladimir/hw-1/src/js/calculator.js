// Функция сложения
function sum() {
  let firstNumber, secondNumber, result;
  firstNumber = +prompt('Введите первое число');
  secondNumber = +prompt('Введите второе число');

  result = firstNumber + secondNumber;
  console.log("Результат сложения " + firstNumber + " + " + secondNumber + " = " + result);
}

// Функция вычитания
function subtraction() {
  let firstNumber, secondNumber, result;
  firstNumber = +prompt('Введите первое число');
  secondNumber = +prompt('Введите второе число');

  result = firstNumber - secondNumber;
  console.log("Результат вычитания " + firstNumber + " - " + secondNumber + " = " + result);
}

// Функция умножения
function multiplication() {
  let firstNumber, secondNumber, result;
  firstNumber = +prompt('Введите первое число');
  secondNumber = +prompt('Введите второе число');

  result = firstNumber * secondNumber;
  console.log("Результат умножения " + firstNumber + " * " + secondNumber + " = " + result);
}

// Функция деления
function division() {
  let firstNumber, secondNumber, result;
  firstNumber = +prompt('Введите первое число');
  secondNumber = +prompt('Введите второе число');

  result = firstNumber / secondNumber;
  console.log("Результат деления " + firstNumber + " / " + secondNumber + " = " + result);
}