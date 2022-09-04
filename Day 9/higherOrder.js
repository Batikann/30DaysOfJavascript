const callback = (n) => {
  return n ** 2;
};

function cube(callback, n) {
  return callback(n) * n;
}

//console.log(cube(callback,3));

//ForEach() function
/*
const numbers=[1,3,5,7,9];
let total=0;
numbers.forEach(number =>total+=number)
console.log(total);
*/

//SetInterval Funciton ==>Mesela bir kod bloğunu her 5 sn bir çaslılştırmak için kullanabiliriz.
//SetTimeOut Function ==> Bir kodun 10 saniye sonra çalışmasını istersek kullanabiliriz.
/*
const sayHello = () => {
  console.log("Hello");
};

const interval = setInterval(sayHello, 2000);

setTimeout(()=>{
  clearInterval(interval);
},5000)
*/

//MAP Function
const numbers=[1,3,5,7,9];
//numbers.map(number=>console.log(number**2));

//filter Funciton
//const value= numbers.filter(number =>number>3 && number<9);
//console.log(value);

let total=  numbers.reduce(function(acc,number) {
  return acc+number;
},5)
console.log(total);