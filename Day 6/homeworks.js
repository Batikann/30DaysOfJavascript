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

let randomPass = [];
let randomPassword;

for (let i = 0; i < 100000000000000; i++) {
  if (randomPass.length == 6) {
    break;
  }
  if (randomPass.includes(randoms[randomPassword]) != true) {
    randomPassword = Math.floor(Math.random() * 37);
    randomPass.push(randoms[randomPassword]);
  }
  if (randomPass.includes(randoms[randomPassword]) == true) {
    randomPassword = Math.floor(Math.random() * 37);
    randomPass.push(randoms[randomPassword]);
  }
}

console.log(randomPass.join(""));
