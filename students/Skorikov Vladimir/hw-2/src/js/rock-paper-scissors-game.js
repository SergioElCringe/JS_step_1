// Функция рандомного выбора числа
function selectionRandom() {
  return Math.floor(Math.random() * 3 + 1);
};

// Функция рандомного выбора числа
function getChoise() {
  let playerChoice = +prompt('Введите значение: где 1 - это камень, 2 - это ножницы, 3 - это бумага');
  if (playerChoice === 1 || playerChoice === 2 || playerChoice === 3) {
    return playerChoice;
  } else {
    return console.log("Вы не выбрали правильное значение, попробуйте еще раз!");
  }
};

// Функиця запуска игры и выбора победителя
function playGame() {
  const playerChoice = getChoise();
  const botComp = selectionRandom();
  switch(playerChoice) {
    // case 'камень':
    case 1: {
      if (botComp === 1) {
        console.log('Ничья! Так как у вас камень и у компьютера');
      } else if (botComp === 2) {
        console.log('Вы выиграли! Так как у вас камень, а у компьютера ножницы');
      } else {
        console.log('Вы проиграли! Так как у вас камень, а у бота бумага');
      }
      break;
    }
    // case 'ножницы':
    case 2: {
      if (botComp === 1) {
        console.log('Вы проиграли! Так как у вас ножницы и у компьютера камень');
      } else if (botComp === 2) {
        console.log('Ничья! Так как у вас ножницы и у компьютера ножницы');
      } else {
        console.log('Вы выиграли! Так как у вас ножницы, а у бота бумага');
      }
      break;
    }
    // case 'бумага':
    case 3: {
      if (botComp === 1) {
        console.log('Вы выиграли! Так как у вас бумага, а у компьютера камень');
      } else if (botComp === 2) {
        console.log('Вы проиграли! Так как у вас бумага, а у компьютера ножницы');
      } else {
        console.log('Ничья! Так как у вас бумага и у компьютера бумага');
      }
      break;
    }
  }
};

