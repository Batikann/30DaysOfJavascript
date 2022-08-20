//step-1
const challange = "30 Days Of JavaScript";

//step-2
console.log(challange);

//step-3
console.log(challange.length);

//step-4
console.log(challange.toUpperCase());

//step-5
console.log(challange.toLowerCase());

//step-6
console.log(challange.substring(0, 3));
console.log(challange.substr(0, 2));

//step-7
console.log(challange.substring(3, challange.length + 1));

//step-8
console.log(challange.includes("Script"));

//step-9
console.log(challange.split());

//step-10
console.log(challange.split(" "));

//step-11
const company = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";
console.log(company.split(","));

//step-12
console.log(challange.replace("JavaScript", "Python"));

//step-13
console.log(challange.charAt(15));

//step-14
console.log(challange.charCodeAt(9));

//step-15
console.log(challange.indexOf("a"));

//step-16
console.log(challange.lastIndexOf("a"));

//step-17
const word =
  "You cannot end a sentence with because because because is a conjunction";
console.log(word.indexOf("because"));
//step-18
console.log(word.lastIndexOf("because"));
//step-19
console.log(word.search("because"));

//step-20
console.log(challange.trim());

//step-21
console.log(challange.startsWith("30"));

//Step-22
console.log(challange.endsWith("t"));

//step-23
console.log(challange.match(/a/gi));

//step-24
let word1 = "30 Days Of";
let word2 = "JavaScript";
console.log(word1.concat(word2));

//step-25
console.log(challange.repeat(2));

//LEVEL-2

//step-1
const word3 = `The quote 'There 
is no exercise better for the 
heart than reaching down and 
lifting people up.' by John Holmes teaches us to help one another.`;
console.log(word3);

//step-2
const word4 = `"Love is not patronizing 
and charity isn't about pity, it is about love.
 Charity and love are the same -- with charity you give love,
  so don't just give money but reach out your hand instead."`;
console.log(word4);

//step-3
let strnum = "10";
console.log(typeof +strnum);

//step-4
let strnum2 = "9.8";
console.log(Math.round(parseFloat(strnum2)));

//step-6
const word5 = "I hope this course is not full of jargon.";
console.log(word5.includes("jargon"));

//step-7
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

//step-8
let randomNum2 = Math.floor((Math.random() * 51)+50);
console.log(randomNum2);

//step-9
let randomNum3=Math.floor(Math.random()*255);
console.log(randomNum3);

//step-10
const language="Javascript";
let randomNum4=Math.floor(Math.random()*language.length);
console.log(language[randomNum4]);

//step-11
const word6=`                    1 1 1 1 1
                    2 1 2 4 8
                    3 1 3 9 27
                    4 1 4 16 64
                    5 1 5 25 125`;

console.log(word6);

//step-12
const word7='You cannot end a sentence with because because because is a conjunction';
console.log(word7.substr(31,24));

//LEVEL-3

//step-1
const word8='Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(word8.match(/love/gi));

//step-2
const word9='You cannot end a sentence with because because because is a conjunction';
console.log(word9.match(/because/gi));

//step-3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/([^a-z0-9 \.\_\-]+)/gi, ''));

//step-4
let totalAnnualIncome=(((15000-5000)*12)+10000);
console.log(totalAnnualIncome);
