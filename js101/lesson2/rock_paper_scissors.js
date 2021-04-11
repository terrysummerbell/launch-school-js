// rock_paper_scissors.js

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper']
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(playerChoice, computerChoice) {
  return WINNING_MOVES[playerChoice].includes(computerChoice);
}

let playerScore = 0;
let computerScore = 0;

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, the computer chose ${computerChoice}`);
  if (playerWins(playerChoice, computerChoice)) {
    prompt('You win!');
    playerScore += 1;
  } else if (playerChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
    computerScore += 1;
  }
  prompt(`Player Score: ${playerScore}`);
  prompt(`Computer Score: ${computerScore}`);
}

function bestOfFive() {
  if (playerScore === 5) {
    prompt('You win the best of 5!');
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    prompt(`Computer wins best of 5!`);
    playerScore = 0;
    computerScore = 0;
  }
}

let answer;
function askToPlayAgain() {
  prompt('Would you like to play again? (y/n)');
  answer = readline.question().toLowerCase();

  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = readline.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a proper choice, please choose rock, paper, scissors. spock or lizard: ");
    playerChoice = readline.question();
  }

  let randomIndex = (Math.ceil(Math.random() * (VALID_CHOICES.length)) - 1);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(playerChoice, computerChoice);
  bestOfFive();
  askToPlayAgain();

  if (answer !== 'y') {
    prompt('Thanks for playing "Rock, Paper, Scissors, Spock, Lizard". Have a good day!');
    break;
  }
}