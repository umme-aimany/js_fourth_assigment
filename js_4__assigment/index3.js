alert("FUNCTION WHILE AND DO WHILE LOOP ASSIGMENT:");
document.write("<h2>ANSWERS OF FUNCTIONS SWITCH WHILE & DO WHILE LOOP</h2>");
document.write("<h3> ANSWER NO:01</h3>");
function power(a, b) {
  return Math.pow(a, b);
}
document.write(power(2, 3)); // Output: 8
document.write(power(5, 2)); // Output: 25
document.write(power(10, 0)); // Output: 1

document.write("<h3> ANSWER NO:02</h3>");
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true; // Leap year
  } else {
    return false; // Not a leap year
  }
}
document.write(isLeapYear(2012)); // Output: true
document.write(isLeapYear(2016)); // Output: true
document.write(isLeapYear(2020)); // Output: true
document.write(isLeapYear(2021)); // Output: false

document.write("<h3> ANSWER NO:03</h3>");
function calculateSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}
function calculateTriangleArea(a, b, c) {
  var s = calculateSemiPerimeter(a, b, c);
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
var sideA = parseInt(prompt("ENTER THE VAUE OF FIRST SIDE OF AREA OF TRIANGLE"));
var sideB = parseInt(prompt("ENTER THE VAUE OF SECOND SIDE OF AREA OF TRIANGLE"));
var sideC = parseInt(prompt("ENTER THE VAUE OF THIRD SIDE OF AREA OF TRIANGLE"));

var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
document.write("The area of the triangle is: " + triangleArea);

document.write("<h3> ANSWER NO:04</h3>");

function calculateAverage(mark1, mark2, mark3) {
  return (mark1 + mark2 + mark3) / 3;
}

function calculatePercentage(totalMarks) {
  return (totalMarks / 300) * 100;
}

function mainFunction(mark1, mark2, mark3) {
  var average = calculateAverage(mark1, mark2, mark3);
  var percentage = calculatePercentage(mark1 + mark2 + mark3);

  document.write("Average: " + average.toFixed(2));
  document.write("Percentage: " + percentage.toFixed(2) + "%");
}
mainFunction(80, 75, 90);
document.write("<h3> ANSWER NO:05</h3>");

function customIndexOf(str, char) {
  return str.indexOf(char);
}
const myString = "Hello, World!";
document.write(customIndexOf(myString, "o")); // Output: 4
document.write(customIndexOf(myString, "z")); // Output: -1
document.write("<h3> ANSWER NO:06</h3>");
document.write("<h3> ANSWER NO:06</h3>");
function deleteVowels(sentence) {
    if (sentence.length > 25) {
      return "Sentence is too long. Please provide a sentence with 25 characters or less.";
    }
  
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';
  
    for (let i = 0; i < sentence.length; i++) {
      let currentChar = sentence.charAt(i);
      if (!vowels.includes(currentChar)) {
        result += currentChar;
      }
    }
  
    return result;
  }
  let sentencee = "Hello, how are you?";
  let result = deleteVowels(sentencee);
 document.write(result);  // Output: Hll, hw r y?
document.write("<h3> ANSWER NO:07</h3>");

function countSuccessiveVowels(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = parseInt(prompt("enter the vowels"));

  for (let i = 0; i < text.length - 1; i++) {
    const currentChar = text[i].toLowerCase();
    const nextChar = text[i + 1].toLowerCase();

    switch (currentChar) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        if (vowels.includes(nextChar)) {
          count++;
        }
        break;
    }
  }

  return count;
}

const sentence = "Pleases read this application and give me gratuity";
const occurrences = countSuccessiveVowels(sentence);
document.write(occurrences); // Output: 3

document.write("<h3> ANSWER NO:08</h3>");

function convertToMeters(distanceInKm) {
  return distanceInKm * 1000;
}

function convertToFeet(distanceInKm) {
  return distanceInKm * 3280.84;
}

function convertToInches(distanceInKm) {
  return distanceInKm * 39370.1;
}

function convertToCentimeters(distanceInKm) {
  return distanceInKm * 100000;
}

// Example usage
let distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

let distanceInMeters = convertToMeters(distanceInKm);
let distanceInFeet = convertToFeet(distanceInKm);
let distanceInInches = convertToInches(distanceInKm);
let distanceInCentimeters = convertToCentimeters(distanceInKm);

document.write("Distance in meters: " + distanceInMeters);
document.write("Distance in feet: " + distanceInFeet);
document.write("Distance in inches: " + distanceInInches);
document.write("Distance in centimeters: " + distanceInCentimeters);
document.write("<h3> ANSWER NO:09</h3>");
function calculateOvertimePay(hoursWorked) {
  const regularHours = 40;
  const overtimeRate = 12.00;

  if (hoursWorked <= regularHours) {
    return 0; // No overtime pay
  } else {
    const overtimeHours = hoursWorked - regularHours;
    const overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
  }
}

const hoursWorked = 45;
const overtimePay = calculateOvertimePay(hoursWorked);
document.write("Overtime Pay: Rs. " + overtimePay.toFixed(2));

document.write("<h3> ANSWER NO:10</h3>");

function calculateCurrencyNotes(amount) {
  var notes100 = Math.floor(amount / 100);  // Number of 100 rupee notes
  var remainingAmount = amount % 100;       // Remaining amount after giving 100 rupee notes
  
  var notes50 = Math.floor(remainingAmount / 50);    // Number of 50 rupee notes
  remainingAmount = remainingAmount % 50;             // Remaining amount after giving 50 rupee notes
  
  var notes10 = Math.floor(remainingAmount / 10);    // Number of 10 rupee notes
  
  return {
    notes100: notes100,
    notes50: notes50,
    notes10: notes10
  };
}

// Example usage
var withdrawalAmount = parseInt(prompt("enter the withdrawl amout"));  // Amount to be withdrawn in hundreds (300 rupees)
var notes = calculateCurrencyNotes(withdrawalAmount);

document.write("Number of 100 rupee notes:", notes.notes100);
document.write("Number of 50 rupee notes:", notes.notes50);
document.write("Number of 10 rupee notes:", notes.notes10);

