'use strict';
/*
console.log(document.querySelector('.message')); //selects the class message
console.log(document.querySelector('.message').textContent); //selects the content of the class message



Document  (starting point) -> document.querySelector()
html
head | body
title | section



console.log(
  (document.querySelector('.message').textContent = '🎉 Correct Number!')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//console.log(document.querySelector('.guess').value);
//<input class="guess" type="number">
//to get the value from an input field, we use the value property
// while there is no input, we get <empty string>
// We can set a value/maniulate it
// document.querySelector('.guess').value = 23;


// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value); //convert the value into a number
//   console.log(guess, typeof guess); //for example, if I type 5, the output is -> 5 number

//   if (!guess) {
//     //if I click the Check button (without any value inside), I receive '0 number'. Zero = falsy value. Not (!) falsy = true. That is to say, true => execute this code. If no guess -> print:
//     document.querySelector('.message').textContent = 'No number'; //No number appears in the browser
//   }
// });
//addEventListener('click') -> click is the type of the event. Event = click. FIRST ARGUMENT OF THE FUNCTION
//Then we specify what should happen after this event listener happens, we define a function (event handler function) function value as an argument. SECOND ARGUMENT OF THE FUNCTION -> reaction to the click event.


//Define the secret number to be compared with
//Define it outside the button handler because we only want it to be defined once (when the app starts -> not to change the number in each click)

// const secretNumber = Math.trunc(Math.random() * 20) + 1; //random number from 1 to 20
// document.querySelector('.number').textContent = secretNumber; //In the real game, it would show a question mark, but we are developing the tool, so we need to see what's happening

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct number';
//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too high!';
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too low!';
//   }
// });



// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// // ----> take document.querySelector('.number').textContent = secretNumber; from here and add to the situation where the player wins
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔️ No number!';
//     displayMessage('⛔️ No number!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
//     displayMessage('🎉 Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
//       displayMessage('💥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
// //1 select the button
// document.querySelector('.again').addEventListener('click', function () {
//   //2
//   //REMEMBER TO RESET VALUES
//   //restore initial values of store and secretNumber
//   score = 20;
//   //new secretNumber (reassign the value to secret number) -> let, not const -> let secretNumber = Math.trunc(Math.random() * 20) + 1;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   //restore the initial conditions of the message, score and guess input field
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score; //20 or score
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = ''; //empty string is the absence of value -> the value of an input is always a string
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

*/

//IMPLEMENTING HIGHSCORES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//we need to store it in a variable
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //we define it as soon as the player wins the game
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
