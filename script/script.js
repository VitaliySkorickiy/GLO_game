'use strict';

//  проверка на число
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

function noName() {

  let count = 10;
  let num = Math.floor(Math.random() * 100 + 1);

  function game() {

    let pr = prompt('Угадай число от 1 до 100');
    let numPrompt;

    pr !== null ? numPrompt = pr.trim() : numPrompt = pr;

    if (!isNumber(numPrompt)) {
      count;
    } else {
      count--
    }

    if (num == numPrompt) {
      if (confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?')) {
        noName()
      } else {
        alert('Игра окончена')
      }

    } else if (count == 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        noName()
      } else {
        alert('Игра окончена')
      }

    } else if (numPrompt == '') {
      alert('Введи число!')
      game()

    } else if (numPrompt === null) {
      alert('Игра окончена')

    } else if (num > numPrompt) {

      if (confirm(`Загаданное число больше, попробуйте ещё, осталось ${count} попыток`)) {
        game()
      } else {
        alert('Игра окончена')
      }

    } else if (num < numPrompt) {
      if (confirm(`Загаданное число меньше, попробуйте ещё, осталось ${count} попыток`)) {
        game()
      } else {
        alert('Игра окончена')
      }

    } else if (!isNumber(numPrompt)) {
      alert(`Введи число! осталось ${count} попыток`)
      game()
    } else {
      alert('Игра окончена')
    }

    console.log(num);
    console.log(numPrompt);
    console.log('count', count);
  }

  game();
}
noName();