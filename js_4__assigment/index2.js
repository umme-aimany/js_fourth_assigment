document.write("<h2>ANSWERS OF FUNCTIONS</h2>");
document.write("<h3> ANSWER NO:01</h3>");

alert("functions assigment");
function adds(){
    let today=new Date();
    alert(today);
    document.write(today);
}
adds();
document.write("<h3> ANSWER NO:02</h3>");

function name(){
    let fname=prompt("enter your first name");
    let lname=prompt("enter your last name");
    let full=fname+lname;
    document.write("hellow "+full);
}
name();
document.write("<h3> ANSWER NO:03</h3>");

function num(){
    let fnum=prompt("enter your first number");
    let lnum=prompt("enter your second number");
    let add=fnum+lnum;
    document.write(add);
}
num();
////////////////////////////////////////////////////////////////////////
/////calculator//////////////////////////
document.write("<h3> ANSWER NO:04</h3>");

const operter = prompt("Enter Operetor (either +, -, * or /):");
const number1 = parseFloat(prompt("Enter value"));
const number2 = parseFloat(prompt("Enter value"));

function add() {
    let sum = number1 + number2;
    return sum
}
function sub() {
    let min = number1 - number2;
    return min
}
function mul() {
    let multiply = number1 * number2;
    return multiply;
}
function div() {
    let divide = number1 / number2;
    return divide;
}
let val = 0;

if (operter == "+") {
    val = add(number1, number2);
}
else if (operter == "-") {
    val = sub(number1, number2);
}
else if (operter == "*") {
    val = mul(number1, number2)
}
else if (operter == "/") {
    val = div(number1, number2);
}

document.write("value 01: " + number1 + " value 02: " + number2 + " RESULT: " + val);
document.write("<h3> ANSWER NO:05</h3>");


function squareNumber(number) {
    var result = number * number;
    return result;
  }
  var number = parseInt(prompt("Which number's squares value do you want?",''));
  var squared = squareNumber(number);
  document.write("The square of " + number + " is: " + squared);
  document.write("<h3> ANSWER NO:06</h3>");
 
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      var result = 1;
      for (var i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  var number = parseInt(prompt("Which number's fractional value do you want "));
  var factorialResult = factorial(number);
  document.write("The factorial of " + number + " is: " + factorialResult);
  document.write("<h3> ANSWER NO:07</h3>");
  function displayCounting() {
    let start = parseInt(prompt("Enter the start number:"));
    let end = parseInt(prompt("Enter the end number:"));
  
    if (!isNaN(start) && !isNaN(end)) {
      if (start <= end) {
        for (var i = start; i <= end; i++) {
          document.write(i + "<br>");
        }
      } else {
        for (var i = start; i >= end; i--) {
          document.write(i + "<br>");
        }
      }
    } else {
      document.write("Invalid input. Please enter valid numbers.");
    }
  }
  displayCounting();
  document.write("<h3> ANSWER NO:08</h3>");
  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
      return side * side;
    }
  
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
  
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  let baseLength = parseInt(prompt("enter the base lenght",''));
  let perpendicularLength = parseInt(prompt("enter the prepandicular lenght",''));
  let hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
  document.write("The hypotenuse length is: " + hypotenuseLength);
  document.write("<h3> ANSWER NO:09</h3>");
  function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
  }

  var width = parseInt(prompt("enter the area of rectangular width"));
  var height = parseInt(prompt("enter the height of the area of rectangular"));
  var area2 = calculateRectangleArea(width, height);
  document.write("The area of the rectangle is: " + area2);
//////////////////////////////////////////////////

document.write("<h3> ANSWER NO:10</h3>");
  function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
  }
  
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("The area is " + area);
  }
  var radius = prompt("enter the radius",'');
calcCircumference(radius);
calcArea(radius);
document.write(calcArea);
  
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
  
  
  