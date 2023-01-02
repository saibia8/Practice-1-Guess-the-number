'use strict';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.number-input').value = 13;

// const eventHandler = function () {
//    console.log(document.querySelector('.number-input').value)
// }

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  

  // Empty input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Input some number!';
  }

  // Player won
  else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'You won!😎';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;
  }

  // The number is too high
  else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess-message').textContent = 'Game over!🥲';
    }
  }

  // The number is too low
  else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess-message').textContent = 'Game over!🥲';
    }
  }
});
