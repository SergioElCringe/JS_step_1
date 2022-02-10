var computerChoice, i, unic;
computerChoice = [];
while (computerChoice.length < 4) {
  do {
    unic = true;
    a = Math.floor(Math.random() * 10);
    for (i = 0; i < computerChoice.length; i++) {
      if (a == computerChoice[i]) {
        // такое число уже было
        unic = false;
        break;
      }
    }
  } while (!unic) // повторить генерацию числа
  computerChoice.push(a);
}
console.log(`Выбор ПК: ${ computerChoice.join(",") }`);
var userChoice;
var userArr = [];
function game() {
    userChoice = prompt(`Введи 4 не повторяющихся числа от 0 до 9.`);
    if (userChoice.length === 4) {
    console.log(userChoice);
    //преобразование userChoice(строка) в массив
    userArr = Array.from(userChoice);
    //преобразование строчного массива в числовой
    userArr = userArr.map(function(item) {
        return parseFloat(item);
    });
    console.log(userArr);
    }
    else {console.log(`4 символа!`)};

    const arrResult = userArr.map((item,idx) => {
        const pcItemIdx = computerChoice.findIndex(i => i === item);
        if (idx === pcItemIdx && item === computerChoice[idx]) {
            return 'bull';
        } else if (computerChoice.includes(item)) {
            return 'cow';
        }
    });
    console.log(arrResult)
}

  