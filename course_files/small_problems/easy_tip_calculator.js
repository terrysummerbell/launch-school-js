// easy_tip_calculator.js

// const readlineSync = require('readline-sync');

// console.log('What is the bill?');
// let billAmount = Number(readlineSync.prompt());

// console.log('What is the tip percentage?');
// let tipAsPercentage = Number(readlineSync.prompt());

// let tipAsDecimal = tipAsPercentage / 100;

// let tipAmount = billAmount * tipAsDecimal;

// let totalBill = billAmount + tipAmount;

// console.log(`Your tip amount is ${tipAmount.toFixed(2)}.`);
// console.log(`Your total bill is ${totalBill.toFixed(2)}.`);


// Launch School solution

let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage?\n")
);

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

