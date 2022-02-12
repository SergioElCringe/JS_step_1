// Функция сложения
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

// Функция вычитания
function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

// Функция умножения
function multiplication(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

// Функция деления
function division(firstNumber, secondNumber) {
  return secondNumber ? firstNumber / secondNumber : 'Деление на ноль нельзя!';
};

// Функция вывода результат в консоль
function outputResult(result) {
  console.log(`Результат: ${ result }`);
};

// Функция выбора математической операции
function makeMathOperation(operation) {
  if (operation === 1 || operation === 2 || operation === 3 || operation === 4) {
    let firstNumber, secondNumber, result;
    firstNumber = +prompt('Введите пожалуйста первое число');
    secondNumber = +prompt('Введите пожалуйста второе число');

    switch (operation) {
      // case '+':
      case 1: {
        result = sum(firstNumber, secondNumber);
        break;
      };
      // case '-':
      case 2: {
        result = subtraction(firstNumber, secondNumber);
        break;
      };
      // case '*':
      case 3: {
        result = multiplication(firstNumber, secondNumber);
        break;
      };
      // default '/':
      default: {
        result = division(firstNumber, secondNumber);
      }
    };

    outputResult(result);
  } else {
      return 'Неверно!'
  }
};