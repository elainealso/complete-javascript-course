# DOM and events fundamentals

## DOM Manipulation
### Project Number 1
Document Object Model 
Connection between HTML doc and JavaScript code.
Complete representation of HTML document

- Selection and getting/reading text content:

`````
console.log(document.querySelector('.message'));
//selects the class message -> <p class="message">
console.log(document.querySelector('.message').textContent);//selects the content of the class message
`````
DOM is not part of JavaScript, instead it interacts with Js.
DOM methods and properties are part of Web APIs (libraries that browsers implement and we can access from our Js code)
*API :point_right:  Application Programming Interface*

- Setting content:

````
document.querySelector('.message').textContent = 'New content I want';

````

- Getting value from an input field:

In the HTML:
````
<input class="guess" type="number">
````
To get the value from an input field, we use the value property

````
console.log(document.querySelector('.guess').value);
````
While there is no input, we get:

````
<empty string>
````

We can set a value/manipulate it.
````
document.querySelector('.guess').value = 23;
````

- **Handling click events**

Event listeners wait for an event to happen and react to it.
Where the event should happen? In this case, the check button. In the HTML:

````
<button class="btn check">Check!</button>
````
Here it has two classes, but the class check is the one we need right now. (btn is more generic and also applies to the other button)

````
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
````
FIRST ARGUMENT OF THE FUNCTION
addEventListener('click') -> click is the type of the event. Event = click. 

SECOND ARGUMENT OF THE FUNCTION :point_right: reaction to the click event.
Then we specify what should happen after this event listener happens, we define a function (event handler function) function value as an argument.  

Same as:
````
const x = function(){
    console.log(23);
}
````
We don't call the function. Js will call it as soon as the event happens.

If we also want to change the message, we can add that to the function:
````
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉 Correct Number!';
});
````
Or any other logic:

````
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //convert the value into a number
  console.log(guess, typeof guess); //for example, if I type 5, the output is -> 5 number

  if (!guess) {
    //if I click the 'Check' button (without any value inside), I receive '0 number'. Zero = falsy value. Not (!) falsy = true. That is to say, true => execute this code. If no guess -> print:
    document.querySelector('.message').textContent = 'No number';//No number appears in the browser
  }
});
````

How to **define the secret number** to compare the guesses? 
**Where?**
Define it outside the button handler because we only want it to be defined once (when the application starts). Not doing so would change the number in each click.
````
const secretNumber = Math.trunc(Math.random() * 20) + 1; 
//random number from 1 to 20
document.querySelector('.number').textContent = secretNumber; 
//In the real game, it would show a question mark, but we are developing the tool, so we need to see what's happening

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
  }
});
````

Every time there is a **wrong guess**, the **score should decrease by 1**.
We start the game with the score of 20
Create a variable for the score in the code and update that variable (let -> changes)

````
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    score--; //score = score - 1
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score--; //score = score - 1
    document.querySelector('.score').textContent = score;
  }
});
````
We have to **define a way to winning or losing the game**, otherwise the score will decrease indefinitely. The checking shall be **above 0**.

````
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';


    //WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--; //score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    
    //WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--; //score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
````
### Manipulating CSS styles

When manipulating CSS, always specify the style with a string

````
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
    //if the person guesses the number, the style changes
    //we're going to change the color of the whole page (body), no need of classes or ID's, just the element itself
    document.querySelector('body').style.backgroundColor = '#60b347';
    //background color property on the style property set to new color
    //ALWAYS SPECIFY THE STYLE WITH A STRING
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--; //score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--; //score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
````
To hide the number again with a question mark.
We only want to see this number if the player guesses the number.

Assignment/Coding challenge note:

````
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// ----> take document.querySelector('.number').textContent = secretNumber; from here and add to the situation where the player wins
let score = 20;

//we need to store the highscores in a variable
let highscore = 0;

//REFACTORING -> creating functions (for the messages)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //highscores -> as soon as the player wins the game
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//1 select the button
document.querySelector('.again').addEventListener('click', function () {

  //2
  //REMEMBER TO RESET VALUES
  //restore initial values of store and secretNumber
  score = 20;

  //new secretNumber (reassign the value to secret number) -> let, not const -> let secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //restore the initial conditions of the message, score and guess input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score; //20 or score
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; 
  //empty string is the absence of value -> the value of an input is always a string
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

````
### Project Number 2
````
const modal = document.querySelector('.modal'); //modal window -> a graphical control element subordinate to an application's main window.

const overlay = document.querySelector('.overlay'); //grey part to hide the background

//modal and overlay has the class hidden -> in the CSS file, the class hidden is 'display: none' because according to the buttons clicked, they appear or disappear
//display: none -> not visible
//display: block -> visible

const btnCloseModal = document.querySelector('.close-modal');

//To select multiple buttons at the same time
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal); //NodeList(3) [ button.show-modal, button.show-modal, button.show-modal ]

for (let i = 0; i < btnsOpenModal.length; i++)
  //console.log(btnsOpenModal[i].textContent);// Show modal 1, Show modal, 2 Show modal 3 -> basically an array holding all of the buttons -> each iteration of the loop
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked'); //when we click the button (in the browser), Button clicked appears in the console
    //(below) we have to remove the class hidden from the modal and remove the overlay
    modal.classList.remove('hidden'); //the dot is only for the selector ('.xxx')
    overlay.classList.remove('hidden');
  });
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
/*
//right now, we can't close the window using the x, just reloading the page
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  //clicking the area outside should also close the window
});
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
//Instead of the repetitive code above:
*/
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
````
Same to open the modal (code refactored):

````
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

````

````
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//hitting the escape key (esc) to close the modal
//respond to keyboard events (global event) -> addEventListener
document.addEventListener('keydown', function (event) {
  //event keydown -> as soon as we hit any key
  //console.log('A key was pressed');
  //console.log(event);//after adding the parameter 'event'in the function, when we hit any key, it shows in the browser which key was pressed
  console.log(event.key); //key is the property name from the object -> escape is the key that I pressed, or command, or 3, etc
  /*
  if (event.key === 'Escape') {
    //console.log('Esc was pressed') //when I hit Esc, this message is printed
    //when do I want to close the modal? when it's visible -> when does not contain the class hidden
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
    //code above refactored:
*/
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
````

### Project Number 3
New project.
Step 1: reset numbers 43 and 24 (reassign it to 0)
````
//HTML
<p class="score" id="score--0">43</p>
<p class="score" id="score--1">24</p>
````
There are two different ways to select an id:
````
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //bit faster
// reassign it to 0
score0El.textContent = 0;
score1El.textContent = 0;
````
Hide the dice -> create hidden class and add at the beginning
Is there a hidden class in the CSS? If not, create one:
````
//CSS:
.hidden{
  display: none;
}
````
````
//HTML: 
<img src="dice-5.png" alt="Playing dice" class="dice" />
````
````
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
````
We need to react to the roll button -> select the button and add an event listener:

````
//HTML
<button class="btn btn--new">🔄 New game</button>
<button class="btn btn--roll">🎲 Roll dice</button>
<button class="btn btn--hold">📥 Hold</button>
````
````
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn--hold');
````

````
//HTML: 
<p class="current-score" id="current--0">0</p>
//HTML: 
<p class="current-score" id="current--1">0</p>

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let currentScore = 0;

btnRoll.addEventListener('click', function () {
  //Step 1: Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //Step 2: Display dice
  //(remove hidden class)
  diceEl.classList.remove('hidden');
  //display the image according to the number -> In the HTML: <img src="dice-5.png" alt="Playing dice" class="dice" /> manipulating the attribute according to the source number
  diceEl.src = `dice-${dice}.png`; //console.log(dice); above prints then the number of the dice
  //Step 3: Check for rolled 1, if true, switch to next player
  if (dice !== 1) {
    //Add dice to current score (that's when we created the variable above)
    currentScore += dice;
    current0El.textContent = currentScore; //THIS WILL CHANGE LATER (because it must keep the 'current' score from the 'current' player, not only the 0)
  } else {
    //Switch to next player
  }
});
````

Next steps:

````

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const scores = [0, 0]; //<------ score of both players [player1, player2]
let activePlayer = 0; //<------- it holds 0 if current player is 0, and 1 if it's 1 (player 1 = 0 (index), player 2 = 1 (index))

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //document.getElementById(`current--${activePlayer}`) selects the score dynamically based on who is the active player right now (instead of current0El.textContent = currentScore;)
  } else {
    //Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0; //textContent back to 0 (before switching the player, we need to change the current score of player 0 back to 0)
    currentScore = 0; //when we switch the player, we need to reset the current score (back to 0)
    activePlayer = activePlayer === 0 ? 1 : 0; //if activePlayer is 0 then we want the new active player to be 1, else it should be 0. If activePlayer === 0 is false (player is 1), the activePlayer will become 0

    //FOR THE CHANGES IN THE STYLE
    //HTML -> <section class="player player--0 player--active"> This class player--active must jump from one player to the other (0 and 1), according to who is the active player
    //First step -> select the elements 'const player0El = document.querySelector('.player--0');' and 'const player1El = document.querySelector('.player--1');'

    player0El.classList.toggle('player--active'); //toggle checks if the class is there, if it is it will remove it, if it's not it will add it
    player1El.classList.toggle('player--active');
  }
});

````
Holding the score:
````
btnHold.addEventListener('click', function () {
  //1. Add current score to (total) active player's score
  //we store the score in the score variable -> const scores = [0, 0];
  scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore -> player 1 = score 1, player 0 = score 0
  //HTML: <p class="score" id="score--0">43</p> and <p class="score" id="score--1">43</p>
  
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];
  //To complete the process, we need to switch the player, and to do that we need to repeat code above (but we have to keep the DRY principle)

  //2. Check if player's score is >= 100
  // (if so) Finish the game

  // (if not) Switch to the next player
});
````
**DRY**
To avoid repetition, we transform this part of the code in a function:
````
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
````

````
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  //the function doesn't need parameters because the code is exactly the same in both situations
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for rolled 1
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Check if player's score is >= 100
  // (if so) Finish the game
  if (scores[activePlayer] >= 100) {
    /*
  //CSS:
  .player--winner {
  background-color: #2f2f2f;
  }
  //HTML:
  <section class="player player--0 player--active">
  */
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    //we need to remove the active player class otherwise, we're going to have the active and the winner player class at the same time
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // (if not) Switch to the next player
    switchPlayer();
  }
});
````
Next steps:

````
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true; // <---------- create a state to establish that as soon as the game is finished, we can no longer play, otherwise it will continue and the other player will win too

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // <---------- all this logic shall only be executed if we are playing
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // <---------- all this logic shall only be executed if we are playing
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // (if so) Finish the game
      playing = false; // <---------- reassigning this to false (alone) doesn't do anything
      diceEl.classList.add('hidden'); // when a player wins the game, the dice is gone
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // (if not) Switch to the next player
      switchPlayer();
    }
  }
});
````
Resetting the game:

Set back all the initial conditions of the game
Remove winner class and set all the scores back to zero
````
<button class="btn btn--new">🔄 New game</button>  ->  const btnNew = document.querySelector('.btn--new');
````

````
btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  //remove winner class
  player0El.classList.remove('player--winner'); //player--winner is a class of CSS
  player1El.classList.remove('player--winner');
  //we don't know which player is the active player, so we need to remove from both and add to the first player
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});

````
Then, we need to set the starting conditions:
````
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
````
To keep the code DRY, we'll create a function for initialization.
And last steps:

````
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//scoping
let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // (if so) Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // (if not) Switch to the next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init); //function as a parameter

````
Final code:

````

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
````

