// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message, lang = 'es') {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages('welcome'));

while (true) {
  prompt(messages('first_number'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('invalid_number'));
    number1 = readline.question();
  }

  prompt(messages('second_number'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('invalid_number'));
    number2 = readline.question();
  }

  prompt(messages('operand_choice'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invalid_operand'));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1': // addition
      output = Number(number1) + Number(number2);
      break;
    case '2': // subtraction
      output = Number(number1) - Number(number2);
      break;
    case '3': // multiplication
      output = Number(number1) * Number(number2);
      break;
    case '4': // division
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);

  prompt(messages('another_calculation'));
  let answer = readline.question();

  if (answer !== 'y') break;
}
