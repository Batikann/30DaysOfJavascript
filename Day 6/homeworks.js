//LEVEL 1

//Step-5
/*
for (let i = 0; i <=10; i++) {
    console.log(`${i} x ${i} = ${i*i}`);
    
}
*/

//Step-6
/*
console.log('i i^2  i^3');
for (let i = 0; i <=10; i++) {
    console.log(`${i}  ${i**2}  ${i**3}`);
    
}
*/

//Step-7
/*
for (let i = 0; i <=100; i++) {
    if (i%2==0) {
        console.log(i);
    }
    
}
*/

//Step-8
/*
for (let i = 0; i <=100; i++) {
    if (i%2==1) {
        console.log(i);
    }
    
}
*/

//Step-9
/*
for (let i = 0; i <=100; i++) {
    if (i%2==1 || i==2) {
        console.log(i);
    }
    
}
*/

//Step-10
/*
let sum=0;
for (let i = 0; i <=100; i++) {
    sum +=i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
*/

//Step-11
/*
let evenSum=0;
let oddSum=0;
for (let i = 0; i <=100; i++) {
    if (i%2==0) {
        evenSum+=i;
    }
    else {
        oddSum +=i;
    }
}

//Step-12
const arr=[evenSum,oddSum]
console.log(arr);
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`);
*/

//Step-13
/*
const arr2=[];
for (let i = 0; i < 5; i++) {
    let value=((Math.floor(Math.random()*10)+1))
    arr2.push(value)
    
}
console.log(arr2);
*/

//Step-14
/*
const arr2 = [];
for (let i = 0; i < 10; i++) {
  let value = Math.floor(Math.random() * 10) + 1;
  if (arr2.includes(value) != true) {
    arr2.push(value);
    if (arr2.length==5) {
        break;
    }
  } else if (arr2.includes(value) == true) {
    if (arr2.includes(value) != true) {
      value = Math.floor(Math.random() * 10) + 1;
      arr2.push(value);
      if (arr2.length==5) {
        break
      }
    }
  }
}
console.log(arr2);
*/

//Step-15
const randoms = [
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
  0,
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

/*
let randomPass = [];
let randomPassword;

for (let i = 0; i < 100000000000000; i++) {
  if (randomPass.length == 6) {
    break;
  }
  if (randomPass.includes(randoms[randomPassword]) != true) {
    randomPassword = Math.floor(Math.random() * 36);
    randomPass.push(randoms[randomPassword]);
  }
  if (randomPass.includes(randoms[randomPassword]) == true) {
    randomPassword = Math.floor(Math.random() * 36);
    randomPass.push(randoms[randomPassword]);
  }
}

console.log(`'#${randomPass.join('')}'`);
*/

//LEVEL 2

//Step-1
/*
let randomPass = [];
let randomPassword;
let randomLength=Math.floor((Math.random()*20)+6);
for (let i = 0; i < 10000; i++) {
  if (randomPass.length == randomLength) {
    break;
  }
  if (randomPass.includes(randoms[randomPassword]) != true) {
    randomPassword = Math.floor(Math.random() * 36);
    randomPass.push(randoms[randomPassword]);
  }
  if (randomPass.includes(randoms[randomPassword]) == true) {
    randomPassword = Math.floor(Math.random() * 36);
    randomPass.push(randoms[randomPassword]);
  }
}

console.log(randomPass.join(""));
*/

//Step-2
/*
let randomPass = [];
let randomPassword;

for (let i = 0; i < 1000; i++) {
  if (randomPass.length == 6) {
    break;
  }
  if (randomPass.includes(randoms[randomPassword]) != true) {
    randomPassword = Math.floor(Math.random() * 36);
    randomPass.push(randoms[randomPassword]);
  }
  if (randomPass.includes(randoms[randomPassword]) == true) {
    randomPassword = Math.floor(Math.random() * 36);
    randomPass.push(randoms[randomPassword]);
  }
}

console.log(`'#${randomPass.join('')}'`);
*/

//Step-3
/*
let rgbCode = [];
for (let i = 0; i < 10000; i++) {
  if (rgbCode.length == 3) {
    break;
  }
  let randomRgbCode=Math.floor((Math.random()*255));
  rgbCode.push(randomRgbCode);
}

console.log(`rgb(${rgbCode.join(',')})`);
*/

//Step-4
const countriess = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "ICELAND",
  "JAPAN",
  "KENYA",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
const newArr = [];
let landArry = [];
//Step-5
/*

for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].length);
}
console.log(newArr);
*/

//Step-6
/*
for (let i = 0; i < countries.length; i++) {
  newArr.push([
    countries[i],
    countries[i].slice(0, 3).toUpperCase(),
    countries[i].length,
  ]);
}
console.log(newArr);
*/

//Step-7

/*
let text='land'
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().search(text.toLowerCase())>-1) {
    landArry.push(countries[i].slice(0,1).concat(countries[i].toLowerCase().slice(1)));
  }
}
console.log(landArry);
*/

//Step-8
/*
let text='ia'
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().search(text.toLowerCase())>-1) {
    landArry.push(countries[i].slice(0,1).concat(countries[i].toLowerCase().slice(1)));
  }
}
console.log(landArry);
*/

//Step-9
/*
let maxLength=countries[0].length;;
for (let i = 0; i < countries.length; i++) {
   if (countries[i].length>maxLength) {
      maxLength=[countries[i].slice(0,1).concat(countries[i].toLowerCase().slice(1))];
   }
  
}
console.log(maxLength);
*/

//Step-10
/*
let onlyFiveChrtr = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    onlyFiveChrtr.push(countries[i].slice(0,1).concat(countries[i].toLowerCase().slice(1)))
  }
}
console.log(onlyFiveChrtr);
*/

//Step-11
/*
let maxLength=webTechs[0].length;;
for (let i = 0; i < webTechs.length; i++) {
   if (webTechs[i].length>maxLength) {
      maxLength=[webTechs[i].slice(0,1).concat(webTechs[i].toLowerCase().slice(1))];
   }
  
}
console.log(maxLength);
*/

//Step-12
/*
let arr2=[]
for (let i = 0; i < webTechs.length; i++) {
  arr2.push([webTechs[i],webTechs[i].length])
  
}
console.log(arr2);
*/

//Step-13
/*
let mernStackEmpty=[];
for (let i = 0; i < mernStack.length; i++) {
    mernStackEmpty.push(mernStack[i].slice(0,1))
}
console.log(mernStackEmpty.join(''));
*/

//Step-14
/*
const fruitArr=['banana', 'orange', 'mango', 'lemon'];
let newArr2=[];
for (let i = fruitArr.length-1; i >=0; i--) {
  newArr2.push(fruitArr[i]);
}
console.log(newArr2);
*/

//Step-15
/*
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log(fullStack[i][j]);
  }
}
*/

//LEVEL-3

//Step-1-2
/*
let countriesSort=[]
for (let i = 0; i < countries.length; i++) {
  countriesSort.push(countries[i]);
}
console.log(countriesSort.sort());
*/

//Step-3
/*
console.log(mernStack.sort());
console.log(webTechs.sort());
*/

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

//Step-4
/*
let text2='land'
let landArry2=[]
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().search(text2.toLowerCase()) >-1) {
    landArry2.push(countries[i]);
  }
}
console.log(landArry2);
*/

//Step-5
/*
let maxLengthCountries=countries[0];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > maxLengthCountries.length) {
    maxLengthCountries = countries[i];
  }
}

console.log(maxLengthCountries);
*/

//Step-7
/*
let onlyFourChrtr=[];
for (i = 0; i < countries.length; i++) {
  if (countries[i].length==4) {
    onlyFourChrtr.push(countries[i]);
  }
}

console.log(onlyFourChrtr);
*/

//Step-8
/*
let twoMoreChrctr=[];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length >=2) {
     twoMoreChrctr.push(countries[i]);
  }
}

console.log(twoMoreChrctr);
*/

//Step-9
/*
let coppyCountries=[];
for (let i = countries.length-1; i>0; i--) {
   coppyCountries.push(countries[i].toUpperCase());
}
console.log(coppyCountries);
*/






