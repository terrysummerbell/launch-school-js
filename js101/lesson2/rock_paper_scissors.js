// rock_paper_scissors.js

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(playerChoice, computerChoice) {
  return (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
         (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
         (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
         (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
         (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper'));
}

let playerScore = 0;
let computerScore = 0;

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, the computer chose ${computerChoice}`);
  if (playerWins(playerChoice, computerChoice)) {
    prompt('You win!');
    playerScore++;
  } else if (playerChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
    computerScore++;
  }
  prompt(`Player Score: ${playerScore}`);
  prompt(`Computer Score: ${computerScore}`);
}

function bestOfFive(playerScore, computerScore) {
  if (playerScore === 5) {
    prompt('You win the best of 5!');
  } else if (computerScore === 5) {
    prompt('Computer wins the best of 5!');
  }
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
  bestOfFive(playerScore, computerScore);

  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') {
    prompt('Thanks for playing "Rock, Paper, Scissors, Spock, Lizard". Have a good day!');
    break;
  }
}