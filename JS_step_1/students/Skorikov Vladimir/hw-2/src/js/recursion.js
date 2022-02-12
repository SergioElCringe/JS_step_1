// Функция ввода данных, получения от пользователя
function dataEntry() {
  let firstNumber= +prompt('Введите число');
  let degree = +prompt('Введите теперь степень');
  console.log(`Результат равен: ${exponentiation(firstNumber, degree)}`);
};

// Функция возведения в степень
function exponentiation(firstNumber, degree) {
  if (degree == 1) {
     return firstNumber;
  } else {
      return firstNumber * exponentiation(firstNumber, degree - 1);
  };
  // Можно еще так как вариант, короче и без if
  // return (degree == 1) ? firstNumber : (firstNumber * exponentiation(firstNumber, degree - 1));
};