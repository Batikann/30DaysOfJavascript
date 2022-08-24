//LEVEL 1

//Step-1
//const myArr = [1, 3, 5, "Emir", [1, 2, 3], "Javascript", 10];

//Step-3
//console.log(`My Arry Length : ${myArr.length}`);

//Step-4
//console.log(myArr[0]);
//console.log(myArr[Math.floor(myArr.length / 2)]);
//console.log(myArr[myArr.length - 1]);

/*
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
*/

//Step-9
/*
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length-1]);
*/

//Step-11
//console.log(itCompanies);
//console.log((itCompanies.join(' ').toUpperCase().split(' ')));

//Step-12
//console.log(`${itCompanies.join(' ')} are bit IT companies.`);

//Step-13
/*
var result=itCompanies.indexOf('Oracle');
console.log(result);
result !=-1 ? console.log(`${itCompanies[result]}`) : console.log('Not Found!');
*/

//Step-14
//console.log('yapamadım');

//step-15
//console.log(itCompanies.sort());

//step-16
//console.log(itCompanies.reverse());

//Step-17
//console.log(itCompanies.reverse());
//let result=itCompanies.slice(0,3);
//let result2=itCompanies.reverse().slice(0,3);
//let result3=itCompanies.slice(Math.floor(itCompanies.length/2),6);
//console.log(result);
//console.log(result2);
//console.log(result3);
//console.log(itCompanies.shift());
//console.log(itCompanies);
//console.log(itCompanies[Math.floor(itCompanies.length/2)]);
//console.log(itCompanies);
//itCompanies.pop()
//console.log(itCompanies.reverse());

//LEVEL-2

//Step-2
/*
let text='I Love teaching and exporting people.I teach HTML, CSS, JS, React, Python';
let words=text.replace(/[^\w\s]/g, '').split(' ')
console.log(words);
console.log(text.replace(/[^\w\s]/g, '').split(' ').length);
*/

//Step-3
/*
const shoppingCart = ["Meat", "Milk", "Coffee", "Tea", "Honey", "Sugar"];

shoppingCart[0] != "Meat"
  ? shoppingCart.unshift("Meat")
  : console.log("Eklenemedi Çünkü Zaten VAR!");
shoppingCart[shoppingCart.length - 1] != "Sugar"
  ? shoppingCart.push("Sugar")
  : console.log("Eklenemedi Çünkü Zaten VAR!");
console.log(shoppingCart);
shoppingCart[3] = "Green Tee";
console.log(shoppingCart);
*/

//Step-4
/*
const countries=['Ethiopia','Australia','Belarus','Turkey','Brazil','Canada','Germany']

countries.includes('Ethiopia') !=true ? countries.unshift('Ethiopia') : console.log('ETHIOPIA');
console.log(countries);
*/

//Step-5
/*
const ages=[19,22,19,24,20,25,26,24,25,24];
let total=0;
console.log(ages.sort());
let minAge=ages[0];
let maxAge=ages[ages.length-1];
console.log(`Min Age : ${minAge}`);
console.log(`Max Age : ${maxAge}`);
console.log(`Max Age-Min Age ${maxAge-minAge}`);
for (let i = 0; i < ages.length; i++) {
     total+=ages[i];
}
let averageAge=Math.round(total/(ages.length+1))
console.log(`Min-Average and Max-Average ${Math.abs(minAge-averageAge)} ${maxAge-averageAge}`);
console.log(`Average Age : ${averageAge}`);
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

//console.log(countries[(countries.length-1)/2]);
//console.log(countries.slice(0,10));

const arr1=countries.slice(0,(countries.length-1)/2);
const arr2=countries.slice(((countries.length)/2),countries.length+1)
console.log(arr1);
console.log(arr2);