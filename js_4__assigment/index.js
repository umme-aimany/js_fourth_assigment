//////DATE ASSIGMENT//////
document.write("<h1>ANSWERS OF DATES AND TIME</h1>");
document.write("<h1> ANSWER NO:01</h1>");
var now = new Date();
  document.write(now);
  document.write("<hr>");
  document.write("<h1> ANSWER NO:02</h1>");
var currentDate = new Date();
var currentMonth = currentDate.getMonth();

var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var currentMonthName = monthNames[currentMonth];
alert(currentMonthName);
document.write("<b>current month is:</b>"+currentMonthName);
//////////////////////////////////////////
document.write("<h1> ANSWER NO:03</h1>");
var currentDate = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = currentDate.getDay();
var currentDayAbbreviation = dayNames[currentDay];
alert(currentDayAbbreviation);
document.write("<b>current day is:</b>"+currentDayAbbreviation);
document.write("<h1> ANSWER NO:04</h1>");
var currentDate = new Date();
var currentDay = currentDate.getDay();
if (currentDay === 6 || currentDay === 0) {
  alert("It's Fun day");
  document.write("<b>today is  fun day</b>")
} else {
document.write("<b>today is not fun day</b>")
}
////////////////////////////////////////////////////
document.write("<h1> ANSWER NO:05</h1>");
let mon=new Date();
let day=mon.getDay();
if(day==15||day==0){
  document.write("<b>first fifteenth day of the month</b>")
}
else{
  document.write("“Last days of the month”.")
}
//////////////////////////////////////////////////
/////////////////////////////////////////////////////////
document.write("<h1> ANSWER NO:06</h1>");
var tod=new Date();
document.write("CURRENT DATE:"+tod);
////
document.write("<br>");
let mid=new Date(1970);
let midnight=mid.getMilliseconds();
document.write(midnight);
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
document.write("<h1> ANSWER NO:07</h1>");
var current=new Date();
var currentHOUR=current.getHours();
if(currentHOUR < 12){
alert("its AM time");
document.write("its AM time")
}
else{
  alert("its PM time");
  document.write("its PM time")
}
/////////////////////////////////////////////////
document.write("<h1> ANSWER NO:08</h1>");
let Laterdate=new Date(2020,11,31)
document.write(Laterdate);
/////////////////////////////////////
//////////////////////////////////////////////////////
document.write("<h1> ANSWER NO:09</h1>");
// Create a Date object for the starting date of 1st Ramadan 2015
var startingDate = new Date(2015, 5, 18); // June is represented by 5 (0-11 months)

// Get the current date
var currentDate = new Date();

// Calculate the number of milliseconds since 1st Ramadan 2015
var millisecondsPassed = currentDate - startingDate;

// Convert milliseconds to days
var daysPassed = Math.floor(millisecondsPassed / (1000 * 60 * 60 * 24));

// Alert the number of days passed
alert("Number of days passed since 1st Ramadan: " + daysPassed);
document.write("Number of days passed since 1st Ramadan: " + daysPassed);


////////////////////////////////////
////////////////////////////////////////////////////
document.write("<h1> ANSWER NO:10</h1>");


var referenceDate = new Date();
var beginningOf2015 = new Date('January 1, 2015');

var timeDiffInSeconds = Math.floor((beginningOf2015.getTime() - referenceDate.getTime()) / 1000);
let ne=new Date(2015,11,5);
document.write("<li>one referance date is"+ne);
document.write("<br>");
document.write("<li>Seconds elapsed between the reference date and the beginning of 2015: </li>" + timeDiffInSeconds);
///////////////////////////////
document.write("<h1> ANSWER NO:11</h1>");
let present=new Date();
document.write("CURRENT DATE IS :"+present);
document.write("<br>")
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours - 1);
document.write("Updated Date: " + currentDate);
////////////////////////////////////////////////////////
document.write("<h1> ANSWER NO:12</h1>");
let presen=new Date();
document.write("CURRENT YEAR IS :"+presen);
document.write("<br>")
var currentDate = new Date();
var currentHours = currentDate.getFullYear();
currentDate.setFullYear(currentHours - 100);
document.write("Updated Date: " + currentDate);
document.write("<h1> ANSWER NO:13</h1>")  
let age = prompt("Please enter your age:");
let currentyear = new Date().getFullYear();
let birthYear = currentyear - age;
document.write("Your birth year is: " + birthYear);
// document.write("<h1> ANSWER NO:14</h1>") 
// document.write("<h1>K ELECTRIC BILL</h1>") 
// let  customerName=prompt('Customer Name:');
// let currentMonth=prompt('Current Month:', );
// let numberOfUnits=parseInt(prompt('Number of Units:',)); 
// let chargesPerUnit=parseInt(prompt('Charges per Unit:', )) ;
// let latePaymentSurcharge=parseInt( prompt('Late Payment Surcharge:', ));
// let NetAmountPayable  = (numberOfUnits *  chargesPerUnit)
// let GrossAmountPayable= (  NetAmountPayable + latePaymentSurcharge)
// let DueDate = (new Date(currentMonth + " 1, " + birthyear)).toDateString();
// document.write("<b>Customer Name:</b> ", customerName ,"<br>")
// document.write("<b>Current Month:</b> ", currentMonth ,"<br>")
// document.write("<b>Number of Units:</b> ", numberOfUnits ,"<br>")
// document.write("<b>Charges per Unit:</b> ", chargesPerUnit ,"<br>")
// document.write("<b>Net Amount Payable (within Due Date):</b> ", NetAmountPayable ,"<br>")
// document.write("<b>Gross Amount Payable (after Due Date):</b> ", GrossAmountPayable ,"<br>")
// document.write("<b>Due Date:</b> ", DueDate ,"<br>")
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");








