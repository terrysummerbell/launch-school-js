const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message) {
  return MESSAGES[message];
}

function invalidInput(input) {
  return input.trimStart() === '' || Number.isNaN(Number(input)) || input <= 0;
}

prompt(messages('welcome'));

while (true) {
  prompt(messages('loan_amount'));
  let loanAmount = readline.question();

  while (invalidInput(loanAmount)) {
    prompt(messages('invalid_loan_input'));
    loanAmount = readline.question();
  }

  prompt(messages('annualPercentageRate'));
  let annualPercentageRate = readline.question();

  while (invalidInput(annualPercentageRate)) {
    prompt(messages('invalid_apr_input'));
    annualPercentageRate = readline.question();
  }

  prompt(messages('loan_duration'));
  let loanDuration = readline.question();

  while (invalidInput(loanDuration)) {
    prompt(messages('invalid_duration_input'));
    loanDuration = readline.question();
  }

  let percentageToDecimal = Number(annualPercentageRate) / 100;
  let monthlyInterest = Number(percentageToDecimal) / 12;

  let monthlyPayment = Number(loanAmount) * (Number(monthlyInterest) /
                       (1 - Math.pow((1 + Number(monthlyInterest)),
                         (-Number(loanDuration)))));

  monthlyPayment = parseFloat(Number(monthlyPayment)).toFixed(2);

  prompt(`Your monthly loan repayment is £${monthlyPayment}`);

  prompt(messages('new_loan'));
  let newLoan = readline.question();

  if (newLoan !== 'y') {
    prompt(messages('thank_you'));
    break;
  }
}