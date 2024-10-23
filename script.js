'use strict';

let score = 20;
let highScore = 0;
let secretNo = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  let number = Number(document.querySelector('.guess').value);

  console.log(typeof number, number);
  console.log();
  console.log(document.querySelector('.guess').value);
  if (!(number > 0 && number < 21)) {
    displayMessage('Enter valid number btw 0 and 20');
  } else if (number === secretNo) {
    displayMessage('You Win!!!!!');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score == 1) {
    displayMessage('You LOSE');
  } else if (number > secretNo) {
    displayMessage('To High');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (number < secretNo) {
    displayMessage('To Low');
    score--;
    document.querySelector('.score').textContent = score;
  }
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
