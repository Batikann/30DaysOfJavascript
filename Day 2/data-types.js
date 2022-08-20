/*let numOne = 3;
let numTwo = 3;
console.log(numOne === numTwo);

let js = "Javascript";
let py = "Python";
console.log(js == py);

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);

let nums = [1, 2, 3, 4];
console.log(nums);
nums[1] = "emirb";
console.log(nums);

let numbers = [1, 2, 3];
let numbers2 = [1, 2, 3];
console.log(numbers == numbers2); //False döner çünkü non primitive tipler de referans karşılaştırılır


let user={
    name:'Batikan',
    surname:"Uçar",
    age:20,
    job:"student"
}

let user2={
    name:'Batikan',
    surname:"Uçar",
    age:20,
    job:"student"
}
console.log(user==user2);
*/

//Numbers
/*
const PI=Math.PI;
console.log(PI);

console.log(Math.round(PI));

console.log(Math.ceil(PI)); //Her zaman sayının üstüne yuvarlar.
console.log(Math.floor(PI)); //Her zaman sayının altına yuvarlar

console.log(Math.min(3,5,6,7,12,1));
console.log(Math.max(1,3,12,31,22,78));

console.log(Math.random()); //creates random number between 0 to 0.999999

console.log(Math.floor(Math.random()*11));

console.log(Math.abs(-10));
console.log(Math.sqrt(9));
console.log(Math.pow(3,2));
console.log(Math.E);
*/

//STRINGS

console.log("Emir Batıkan" + " Uçar");

let paragraph = "asdsoadasdşsda\
asdpşksdasdaasd\
asdpkaspdasasd";

let name = "Emir";

console.log(paragraph);
let message = `Merhaba ${name} ben `;
console.log(message);

//String Methods

let word = "Hello World!";
let word2 = "Javascript  ";
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
console.log(word.length);
let string2='love';
let stringNum='10';

let firstlatter = word[0];
console.log(firstlatter);
console.log(word[word.length - 1]);
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.substr(3, 9));
console.log(word.substring(0, 5));
console.log(word.split(" "));
console.log(word2);
console.log(word2.trim());
console.log(word.includes("x"));
console.log(word.replace("World", "Javascript")); //replaceAll tüm worldleri javascript ile değiştirir şuan ilk gördüğünü değiştiriyor.
console.log(word.startsWith("Hello"));
console.log(word.endsWith("!"));
console.log(word2.search(/javascript/gi));
console.log(string.match("love"));
console.log(string.match(/Love/gi));
console.log(txt.match(/\d+/g));
console.log(string2.repeat(10));
console.log(typeof stringNum);
console.log(typeof +stringNum);
