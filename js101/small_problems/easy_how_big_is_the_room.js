// easy_how_big_is_the_room.js

const readline = require('readline-sync');

console.log('Please enter the length of the room in metres');
let roomLength = Number(readline.question());
console.log(`You entered a length of ${roomLength} metres`);

console.log('Please enter the width of the room in metres');
let roomWidth = Number(readline.question());
console.log(`You entered a length of ${roomWidth} metres`);

let roomArea = roomLength * roomWidth;
let roomAreaSquareFeet = roomArea * 10.7639;

console.log(`The area of the room is ${roomArea.toFixed(2)} (${roomAreaSquareFeet.toFixed(2)} square feet)`);


// Launch School Solution

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square metres (${areaInFeet} square feet).`
);
