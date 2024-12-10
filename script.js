'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct number';

// // document.querySelector('.number').textContent = 13;
// document.querySelector('.number').textContent = '?';

// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 24;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('no number');
  } else if (guess === secretNumber) {
    displayMessage('correct number 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'to low' : 'to high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//  again

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
