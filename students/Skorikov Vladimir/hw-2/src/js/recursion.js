// Функция ввода данных, получения от пользователя
function dataEntry() {
  let firstNumber= +prompt('Введите число');
  let degree = +prompt('Введите теперь степень');
  console.log(`Результат равен: ${exponentiation(firstNumber, degree)}`);
};

// Функция возведения в степень
function exponentiation(firstNumber, degree) {
  let result = firstNumber;
  if (!degree) {
     firstNumber = 1;
  }
  else if (degree > 1) {
      result = result * exponentiation(firstNumber, degree - 1);
  };
  return result;
};