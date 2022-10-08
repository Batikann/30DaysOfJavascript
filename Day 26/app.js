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

let i = 3;
let x = 2;

const ulElementDOM = document.getElementById("ulElement");
const textBarDOM = document.getElementById("textBar");
const textP = document.getElementById("test");
const strWord = document.getElementById("strWord");
const anyWord = document.getElementById("anyWord");
//const aToZ=document.getElementById('atoZ');


strWord.addEventListener("click", () => {
  textBarDOM.addEventListener("keyup", () => {
    let filterValue = textBarDOM.value.toUpperCase();
    let li = document.querySelectorAll("li");
    let div = document.querySelectorAll(".li-img");
    //let span=document.querySelectorAll(".span-text");
    for (let i = 0; i < div.length; i++) {
      let span = div[i].getElementsByTagName("span")[0];
      if (span.innerHTML.toUpperCase().startsWith(filterValue)) {
        let val = span.innerHTML.toUpperCase().indexOf(filterValue);
        li[i].style.display = "";
        //textP.textContent=`Countries containing ${filterValue} are }`
        //console.log(val.length);
      } else {
        li[i].style.display = "none";
      }
    }
  });

  //console.log(strWord.id);
});

anyWord.addEventListener("click", () => {
  textBarDOM.addEventListener("keyup", () => {
    let filterValue = textBarDOM.value.toUpperCase();
    let li = document.querySelectorAll("li");
    let div = document.querySelectorAll(".li-img");
    //let span=document.querySelectorAll(".span-text");
    for (let i = 0; i < div.length; i++) {
      let span = div[i].getElementsByTagName("span")[0];
      if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        let val = span.innerHTML.toUpperCase().indexOf(filterValue);
        li[i].style.display = "";
        textP.textContent = `Countries containing ${filterValue} are }`;
      } else {
        li[i].style.display = "none";
      }
    }
  });

  //console.log(anyWord.id);
});

let liElement;
let divElement;
let spanElement;

for (let i = 0; i < countries.length; i++) {
  liElement = document.createElement("li");
  divElement = document.createElement("div");
  divElement.classList = "li-img";
  spanElement = document.createElement("span");
  spanElement.classList = "span-text";
  spanElement.textContent = countries[i];
  divElement.appendChild(spanElement);
  liElement.appendChild(divElement);
  ulElementDOM.appendChild(liElement);
}
