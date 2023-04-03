'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  // Empty input
  if (!guessingNumber) {
    displayGuessMessage('Input some number!');
  }

  // Player won
  else if (guessingNumber === secretNumber) {
    displayGuessMessage('You won!😎');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Number from input is wrong
  else if (guessingNumber !== secretNumber) {
    // The number is too high
    if (score > 1) {
      displayGuessMessage(guessingNumber > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayGuessMessage('Game over!🥲');
    }
  } 
});

// Start new game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMessage('Start to guess!');
  displayScore(score);
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
