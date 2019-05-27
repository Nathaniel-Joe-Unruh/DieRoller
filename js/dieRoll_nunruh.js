//  Nathaniel Joe Unruh
//  school ID: nunruh

//  class: Web 2 JavaScript

//  Dice Rolling Simulation

/*  Simulate the roll of an input number of dice.  Use a randomly-generated number to simulate the roll of each single die and remember that JavaScript counts from zero.  Hint: use two methods of the Math object, Math.random() and Math.floor(), to randomly generate an integer between 1 and 6 inclusive.  */

// varialbe for 'first name'
var fName;

// prompt user for input
fName = prompt("Please enter your first name:", "Name");

// verify that fName has not been left blank
while (fName.length === 0 || fName === '') {
  fName = prompt("Reminder: Please enter you first name:", " ");
}

// variable for the number of dice user wishes to roll
var numDice;

// prompt user for input
numDice = prompt("How many dice would you like to roll?", " ");

// verify that input has not been left blank and is an actual integer
while (numDice < 1 || isNaN(numDice) || parseFloat(numDice) !== parseInt(numDice)) {
  numDice = prompt("Reminder: How many dice would you like to roll?  Number should be a positive integer.", " ");
}

// display the number of dice being rolled
if (numDice > 1) {
  document.write("Rolling " + numDice + " dice...<br>");
} else {
  document.write("Rolling 1 die...<br>");
}

//  One alert box for each die displaying what the value of each die roll was.
var roll = 0;  // variable holding which roll is currently being executed
var total = 0; // variable holding the sum of the rolls

roll = shake();  // everytime 'roll' is used it will call the 'shake' method and randomly generate a postive integer from 1 to 6
total += roll;  // this totals up the sum of each roll as they accumulate

// display output to the user including their first name and the roll each die has cast
document.write("Hey " + fName + ", you rolled a " + roll);
alert("Dice # 1 is a " + roll);
if (numDice > 1) {
  for (var i =2; i < numDice; i++) {
    roll = shake();
    document.write(", " + roll);
    alert("Dice # " + i + " is a " + roll);
    total += roll;
  }
  if (numDice > 2) {
    document.write(", ");
  }
  roll = shake();
  document.write(" and a " + roll);
  alert(" and roll # " + numDice + " is a " +roll);
  total += roll;
}
document.write(" for a grand total of " + total);

// function that randomly generates a postive integer from 1 to 6
function shake() {
  var rando = Math.floor(Math.random() * 6) + 1;
  return rando;
}
