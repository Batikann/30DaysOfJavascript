//LEVEL 1

//Step-1
/*
let age=parseInt(prompt('Enter your age:'));
age>=18? console.log(`You are old enough to drive.`) : console.log(`You are left with ${18-age} years to drive.`);
*/

//Step-2
/*
let yourAge = parseInt(prompt("Your Age"));
let myAge = parseInt(prompt("My Age"));
if (myAge > yourAge) {
  console.log(`Ben Senden ${myAge - yourAge} yaş büyüğüm.`);
} else if (yourAge > myAge) {
  console.log(`Sen benden ${yourAge - myAge} yaş büyüksün.`);
} else {
  console.log("Yaşlarımız Eşit");
}
*/

//Step-3
//let a = 5;
//let b = 3;
/*
if (a>b) {
    console.log(` ${a} is greater than ${b}`);
}
else {
    console.log(`${a} is less than ${b}`);
}
*/
//a>b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

//Step-4

/*
let number=parseInt(prompt('Sayıyı Giriniz:'));
if (number%2==0) {
    console.log(`${number} is an even number`);
}
else{
    console.log(`${number} is is an odd number.`);
}
*/

//Level 2

//Step-2

/*
let season = prompt("Bulunduğunuz Ayı Giriniz:");
if (season == "September" || season == "October" || season == "November") {
  console.log("The season is Autumn");
} else if (
  season == "December" ||
  season == "January  " ||
  season == "February"
) {
  console.log("The season is Winter");
} else if (season == "March" || season == "April" || season == "May") {
  console.log("The season is Spring ");
} else if (season == "August" || season == "June" || season == "July") {
  console.log("The season Summer");
} else {
  console.log("Geçersiz Giriş!");
}
*/

//Step-3
/*
let day = prompt("What is the day today?");
if (day.toLowerCase() == "friday") {
  console.log("Friday is a working day");
} else if (day.toLowerCase() == "monday") {
  console.log("Monday is a working day");
} else if (day.toLowerCase() == "tuesday") {
  console.log("Tuesday is a working day");
} else if (day.toLowerCase() == "wednesday") {
  console.log("Wednesday is a working day");
} else if (day.toLowerCase() == "thursday") {
  console.log("Thursday is a working day");
} else if (day.toLowerCase() == "saturday") {
  console.log("Saturday is a weekend");
} else if (day.toLowerCase() == "sunday") {
  console.log("Sunday is a weekend");
}
*/

//LEVEL-3

//Step-1

let value = prompt("Enter Month:");

if (value.toLowerCase() == "february") {
  console.log("February has 28 days");
}
else{
    console.log(`${value[0].toUpperCase()+value.substring(1).toLowerCase()} has 31 days.`);
}
