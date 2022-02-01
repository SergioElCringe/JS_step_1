// Функция калькулятора
function calculator() {

  let firstNumber, secondNumber, actionCalculations, result;
  firstNumber = +prompt('Введите первое число');
  secondNumber = +prompt('Введите второе число');
  actionCalculations = prompt('Введите тип вычисления (например: +, -, *, /)');

  if (actionCalculations == "+") {
     result = firstNumber + secondNumber;
     console.log("Результат сложения " + firstNumber + " + " + secondNumber + " = " + result);
  } else if (actionCalculations == "-") {
     result = firstNumber - secondNumber;
     console.log("Результат вычитания " + firstNumber + " - " + secondNumber + " = " + result);
  } else if (actionCalculations == "*") {
     result = firstNumber * secondNumber;
     console.log("Результат умножения " + firstNumber + " * " + secondNumber + " = " + result);
  } else if (actionCalculations == "/") {
     result = firstNumber / secondNumber;
     console.log("Результат деления " + firstNumber + " / " + secondNumber + " = " + result);
  }

  return result;

}

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