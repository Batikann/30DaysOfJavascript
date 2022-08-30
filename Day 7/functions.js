//LEVEL-1

//Step-1-2
/*
const fullName=(name,surname) =>{
    console.log(`${name} ${surname}`);
}

fullName("Emir Batıkan","UÇAR");
*/

//Step-3
/*
const addNumbers=(num1,num2) =>{
    let total=num1+num2;
    console.log(`Total : ${total}`);
}
addNumbers(10,11);
*/

//Step-4
/*
const areaOfRectangle=(length,width) =>{
    let area=length * width;
    console.log(area);
}
areaOfRectangle(2,3);
*/

//Step-5
/*
const perimeterOfRectangle=(length,width) =>{
    let perimeter=2*(length * width);
    console.log(perimeter);
}
perimeterOfRectangle(2,3);
*/

//Step-6
/*
const volumeOfRectPrism = (length, width, height) => {
  let volume = length * width * height;
  console.log(volume);
};
volumeOfRectPrism(2, 3, 5);
*/

//Step-7
/*
const areaOfCircle = (radius) => {
    const PI=Math.PI;
    let area  = Math.floor(PI * radius * radius);
    console.log(area);
  };
  areaOfCircle(3);
  */

//Step-8
/*
  const circumOfCircle = (radius) => {
    const PI=Math.PI;
    let circumference   = Math.floor(2 * PI * radius);
    console.log(circumference );
  };
  circumOfCircle(3);
  */

//Step-9
/*
  const density=(mass,volume)=>{
    let density=mass/volume
    console.log(density);
  }
  density(100,20);
  */

//Step-10
/*
const speedCalculate = (meter, minute) => {
  let speedCalculate = Math.floor(meter / minute);
  console.log(speedCalculate);
};
speedCalculate(3000,100);
*/

//Step-11
/*
const calculateWeight = (mass) => {
    let gravity=9.81;
    let speedCalculate = Math.floor(mass*gravity);
    console.log(speedCalculate);
  };
  calculateWeight(60);
  */

//Step-12
/*
  function convertCelsiusToFahrenheit(oC) {
     let oF=((oC*(9/5)+32));
     console.log(`oC Value: ${oC} oF Value: ${oF}`);
  }
  convertCelsiusToFahrenheit(27);
  */

//Step-13
/*
function calculateBMI(weight, height) {
  let calculateBMI = Math.floor(weight / height ** 2);
  if (calculateBMI < 18.5) {
    console.log(`Your BMI Value :${calculateBMI} and Under Weight`);
  } else if (calculateBMI >= 18.5 && calculateBMI <= 24.9) {
    console.log(`Your BMI Value :${calculateBMI} and Normal Weight`);
  } else if (calculateBMI >= 25 && calculateBMI <= 29.9) {
    console.log(`Your BMI Value : ${calculateBMI} and Over Weight`);
  } else {
    console.log(`Your BMI Value :${calculateBMI} and Obese`);
  }
}

calculateBMI(89, 1.86);
*/

//Step-14
/*
const checkSeason=(season)=>{
  if (season=="December" || season=="January" || season =="February") {
    console.log("Winter");
  }
  else if (season=="June" || season=="July" || season =="August") {
    console.log("Summer");
  }
  else if (season=="March" || season=="April" || season =="May") {
    console.log("Spring");
  }
  else if (season=="September" || season=="October" || season =="November") {
    console.log("Autumn");
  }
  else{
    console.log("Geçersiz Mevsim");
  }
}
checkSeason("June")
*/

//Step-15
/*
const findMax=(...numbers)=>{
  let maxValue=0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
       maxValue=numbers[i];
    }
  }
  console.log(`Max Value:${maxValue}`);
}
findMax(0,1,2,3,4,53,29,45,75);
*/

//LEVEL-2

//Step-3
/*
const printArray=(Array)=>{
  for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
  }
}

printArray([1,3,4,5,"Emir","UÇar",10,15,17]);
*/

//Step-4
/*
function showDateTime() {
  let dateObject=new Date();
  let date=dateObject.getDate();
  let month=dateObject.getMonth();
  let year=dateObject.getFullYear();
  let hours=dateObject.getHours();
  let minute=dateObject.getMinutes();
  console.log(`${date}/${month}/${year} ${hours}:${minute}`);

}
showDateTime();
*/

//Step-5
/*
const swapValues=(x,y)=>{
   let newX=y;
   let newY=x;
   console.log(`old x:${x} new x:${newX}   old y:${y} new y:${newY}`);
}
swapValues(3,5);
*/

//Step-6
/*
function reverseArray(Array) {
  let newArray=[];
  for (let i = Array.length-1; i >= 0; i--) {
    newArray.push(Array[i]);
  }
  console.log(newArray);
}

reverseArray(['A','B','C','D']);
*/

//Step-7
/*
const capitalizeArray=(Array)=>{
  let capitalizedarray=[];
  for (let i = 0; i < Array.length; i++) {
    capitalizedarray.push(Array[i].toUpperCase());
  }
  console.log(capitalizedarray);
}
capitalizeArray(["Emir","Batıkan","Uçar"]);
*/

//Step-8
/*
const addItem=(value)=>{
  let array=[1,2,3,4,5];
  array.push(value);
  console.log(array);
}
addItem("Test");
addItem(1);
*/

//Step-9 --Tekrar Bakkk!!!
/*
const removeItem=(value)=>{
  let arr=[1,2,3,4,5];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===value) {
      arr.splice(i,1);
    }
    else if(arr[i].){
      console.log(`Silemem Çünkü ${value} dizi de yok!!`);
    }
  }
  console.log(arr);
}

removeItem(2);
*/

//Step-10
/*
const sumOfNumbers=(number)=>{
  let sum=0
  for (let i = 0; i <=number; i++) {
    sum +=i
  }
  console.log(`${number}'ye kadar olan sayıların toplamı: ${sum}`);
}

sumOfNumbers(4);
*/

//Step-11
/*
const sumOfOdds=(number)=>{
  let sum=0
  for (let i = 0; i <=number; i++) {
    if (i%2==1) {
      sum +=i;
    }
  }
  console.log(`${number}'ye kadar olan Tek sayıların toplamı: ${sum}`);
}

sumOfOdds(12);
*/

//Step-12
/*
const sumOfEven=(number)=>{
  let sum=0
  for (let i = 0; i <=number; i++) {
    if (i%2==0) {
      sum +=i;
    }
  }
  console.log(`${number}'ye kadar olan Çift sayıların toplamı: ${sum}`);
}

sumOfEven(12);
*/

//Step-13
/*
function evensAndOdds(number) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i <=number; i++) {
    if (i % 2 == 1) {
      odd += 1;
    } else {
      even += 1;
    }
  }
  console.log(`The number of odds are ${odd}  The number of evens are ${even}`);
}

evensAndOdds(100);
*/

//Step-14
/*
function sum(...numbers) {
  let sum=0;
  for (let i = 0; i < numbers.length; i++) {
   sum +=numbers[i];
  }
  console.log(sum);
}

sum(1,1,1)
*/

//Step-15
/*
const randomUserIP = () => {
  let randomIpAdress = [];
  for (let i = 0; i < 4; i++) {
    let value = Math.floor(Math.random() * 255);
    randomIpAdress.push(value);
  }
  console.log(randomIpAdress.join('.'));
};

randomUserIP();
*/

//Step-16
/*
let words = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const randomNumberWithWord = () => {
  let randomWord = Math.floor(Math.random() * 26);
  let randomNum = Math.floor(Math.random() * 9);
  let word = words[randomWord].toUpperCase();
  return word.concat(randomNum);
};

const randomNumber = () => {
  let value = Math.floor(Math.random() * 99);
  return value;
};

const randomWord = () => {
  let wordss = [];
  for (let i = 0; i < 2; i++) {
    let randomWord = Math.floor(Math.random() * 26);
    wordss.push(words[randomWord].toUpperCase());
  }
  return wordss.join('');
};

const randomMacAddress = () => {
  let randomMacAddress = [];
  for (let i = 0; i < 6; i++) {
    let functions = [randomNumberWithWord(), randomNumber(), randomWord()];
    let number = Math.floor(Math.random() * 3);
    randomMacAddress.push(functions[number]);
  }
  console.log(randomMacAddress.join('-'));
};

randomMacAddress();

*/

//Step-17
/*
function randomHexaNumberGenerator() {
  let randomValue = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  let randomHexArr = [];
  for (let i = 0; i < 6; i++) {
    let value=Math.floor(Math.random()*34);
     
     randomHexArr.push(randomValue[value]);
  }
  console.log(`'#${randomHexArr.join('')}'`);
}

randomHexaNumberGenerator();
*/

//Step-18
/*
let randomValue = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
const randomLower=()=>{
  let value=Math.floor(Math.random()*25)
  return randomValue[value].toLowerCase();
}

const randomUpper=()=>{
  let value=Math.floor(Math.random()*25)
  return randomValue[value].toUpperCase();
}

const randomNumber=()=>{
  let value=Math.floor((Math.random()*9)+26)
  return randomValue[value];
}

const userIdGenerator=()=>{
  let randomId=[];
   for (let i = 0; i < 7; i++) {
    let arr=[randomLower(),randomUpper(),randomNumber()];
    let value=Math.floor((Math.random()*3))
    randomId.push(arr[value]);
   }
   console.log(randomId.join(''));
}

userIdGenerator();

//console.log(Math.floor((Math.random()*3)));
*/

//LEVEL-3

//Step-1
/*
let randomValue = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
const randomLower = () => {
  let value = Math.floor(Math.random() * 25);
  return randomValue[value].toLowerCase();
};

const randomUpper = () => {
  let value = Math.floor(Math.random() * 25);
  return randomValue[value].toUpperCase();
};

const randomNumber = () => {
  let value = Math.floor(Math.random() * 9 + 26);
  return randomValue[value];
};

const userIdGenerator = () => {
  let characterNumber = prompt("Karakter Sayısını Giriniz");
  let repeatNumber = prompt("Tekrar Sayısını Giriniz");

  let randomId = [];
  for (let x = 0; x < parseInt(repeatNumber); x++) {
    for (let i = 0; i < parseInt(characterNumber); i++) {
      let arr = [randomLower(), randomUpper(), randomNumber()];
      let value = Math.floor(Math.random() * 3);
      randomId.push(arr[value]);
    }
    console.log(randomId.join(""));
    randomId=[];
  }
};

userIdGenerator();
*/

//Step-2
/*
const rgbColorGenerator=()=>{
  let randomRgb=[];
  for (let i = 0; i < 3; i++) {
    let value=Math.floor(Math.random()*255)
    randomRgb.push(value);
  }
  console.log(`RGB Code: rgb(${randomRgb.join(',')})`);
}

rgbColorGenerator();
*/

//Step-8 -------------->Tekrar Bak Düzgün Çalışmıyor!!
/*
const shuffleArray=(Array)=>{
  let shuffleArr=[];
  let lastValue;
  for (let i = 0; i < Array.length; i++) {
    let value=Math.floor(Math.random()*Array.length);
    if (value==lastValue) {
      let value=Math.floor(Math.random()*Array.length);
    }
    else{
      shuffleArr.push(Array[value]);
    }
    lastValue=value;
  }
  console.log(shuffleArr);
}

shuffleArray([1,2,3,4,5]);
*/

//Step-9
/*
const factorial=(number)=>{
  let value=1;
  for (let i = number; i >= 1; i--) {
    value *=i;
  }
  console.log(value);
}

factorial(4);
factorial(5);
*/

//Step-10
/*
const isEmpty=(Array)=>{
  if (Array.length<1) {
    console.log("Array is Empty!");
  }
  else{
    console.log("Array Not Empty!");
  }
}

isEmpty([1,1,1])
*/

//Step-11
/*
const sum=(...numbers)=>{
  let sum=0;
   for (let i = 0; i < numbers.length; i++) {
      sum +=numbers[i];
   }
   console.log(sum);
}

sum(1,2,3,5,7)
*/

//Step-12

/*
const sumOfArrayItems=(Array)=>{
  let sum=0;
  for (let i = 0; i < Array.length; i++) {
    sum +=Array[i];
  }
  console.log(`Sum: ${sum}`);
}

sumOfArrayItems([1,2,3,4,5]);
*/

//Step-13
/*
const average=(Array)=>{
  let sum=0;
  let average=Array.length;
   for (let i = 0; i < Array.length; i++) {
       sum +=Array[i];
   }
   console.log(sum);
   console.log(average);
   console.log(`Average: ${sum/average}`);
}
average([10,4,5,7,3]);
*/

//Step-14
/*
const modifyArray = (Array) => {
  let modifyArr = [];
  for (let i = 0; i < Array.length; i++) {
    if (i == 4) {
      let fifthItem = Array.slice(4, 5).toString().toUpperCase();
      modifyArr.push(Array[i].toUpperCase());
      continue;
    }
    modifyArr.push(Array[i]);
  }
  if (Array.length>=5) {
    console.log(modifyArr);
  }
  else{
    console.log("Array Uzunluğu Yetersiz..");
  }
};

//let testArr=[1,2,3,4,"Test",6];
//console.log(testArr.slice(4,5).toString().toUpperCase().split(' '));
console.log(modifyArray(["Avocado", "Tomato", "Potato","Potato"]));
*/

//Step-15
/*
const isPrime=(...numbers)=>{
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]==2 || numbers[i]%2==1) {
      console.log(`${numbers[i]} is Prime`);
    }
    else{
      console.log(`${numbers[i]} not Prime`);
    }
    
  }
}

isPrime(4);
*/

//Step-16
/*
const uniqueArr = (value, index, self) => {
  return self.indexOf(value) == index;
};

const arr=[1,2,3,4,1,4,4,5];
console.log(arr.filter(uniqueArr));
*/
//Step-17
/*
const typeControl = (Array) => {
  let lastArrValue;
  let status;
  for (let i = 0; i < Array.length; i++) {
    if (lastArrValue != (typeof Array[i])) {
      lastArrValue = typeof Array[i]; 
      status=true;
      break;
    } else {
       status=false;
    }
  }
  status==true? console.log("Farklı Tip Var") : console.log("Aynı Tipte");
};

typeControl([1,2,3,4,5,6])
*/

//Step-18
/*
const isValidVariable = (value) => {
  var regex = "^([a-zA-Z_$][a-zA-Zd_$]*)$";
  if (value.match(regex)) {
    console.log(`${value} Valid Variable Name..`);
  }
  else{
    console.log(`${value} Invalid Variable Name..`);
  }
};

isValidVariable("number 11")
*/

//Step-19
/*
const sevenRandomNumbers=()=>{
  let randomNumbers=[];
  for (let i = 0; i < 7; i++) {
    let randomVal=Math.floor(Math.random()*9);
    randomNumbers.push(randomVal);
  }
  console.log(randomNumbers);
}

sevenRandomNumbers();
*/

//Step-20
/*
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const reverseCountries = (Array) => {
  let copyArr = [];
   for (let i = 0; i < Array.length; i++) {
    copyArr.push((Array[i]));
   }
   console.log(copyArr);
   console.log(Array.reverse());
};

reverseCountries(countries)
*/