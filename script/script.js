'use strict';

//  проверка на число
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

function noName() {

  let num = Math.floor(Math.random() * 10 + 1);

  function game() {

    let numPrompt = prompt('Угадай число от 1 до 100');

    if (num == numPrompt) {
      alert('Поздравляю, Вы угадали!!!')

    } else if (numPrompt === null) {
      alert('Игра окончена')

    } else if (num > numPrompt) {

      if (confirm('Загаданное число больше, попробуйте ещё')) {
        game()
      } else {
        alert('Игра окончена')
      }

    } else if (num < numPrompt) {
      if (confirm('Загаданное число меньше, попробуйте ещё')) {
        game()
      } else {
        alert('Игра окончена')
      }

    } else if (!isNumber(numPrompt)) {
      alert('Введи число!')
      game()
    } else {
      alert('Игра окончена')
    }

  }

  game();
}
noName();