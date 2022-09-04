const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//LEVEL-1

//STEP-3
//countries.forEach(countrie=>console.log(countrie));

//STEP-6
/*
let value=countries.map(countrie =>countrie.toUpperCase());
console.log(value);
*/

//Step-7 ??
/*
let value =countries.map(countries => countries.length);
console.log(value);
*/

//Step-8
/*
let value=numbers.map(number => number**2);
console.log(value);
*/

//Step-10
//products.map(product => console.log(`${product.product} : ${product.price}`));

//Step-11
/*
let value=countries.filter(countrie => countrie.toLowerCase().includes('land'));
console.log(value);
*/

//STEP-12
/*
let value=countries.filter(countrie => countrie.length==6);
console.log(value);
*/

//Step-13
/*
let value=countries.filter(countrie => (countrie.length==6 || countrie.length>6));
console.log(value);
*/

//Stepp-14
/*
let value=countries.filter(countrie => countrie.slice(0,1).toLowerCase().includes('e'));
//let value=countries.map(countrie => countrie.slice(0,1))
console.log(value);
*/

//Step-15
/*
let value=products.filter(product => product.price !='')
console.log(value);
*/

//Step-16
/*
const getStringList=(Array)=>{
    for (let i = 0; i < Array.length; i++) {
        console.log(Array[i]);
        
    }
}

getStringList(countries);
*/

/*
let value=numbers.reduce((acc,number)=> acc +=number);
console.log(value);
*/

//Step-18 ?? reduce baklıacak!!

//Step-20
/*
let value=names.some(name => name.length>7);
console.log(value);
*/

//Step-21
/*
let value=countries.every(countrie => countrie.toLowerCase().includes('land'))
console.log(value);
*/

//Step-23
/*
let value=countries.find(countrie => countrie.length ==6);
console.log(value);
*/

//Step-24
/*
let value=countries.findIndex(countrie => countrie.length==6);
console.log(value);
*/

//Step-25
/*
let value=countries.findIndex(countrie => countrie.toLowerCase()=="norway");
console.log(value);
*/

//Step-26
//let value=countries.findIndex(countrie => countrie.toLowerCase()=="russia");
//console.log(value);

//LEVEL-2

//Step-1
//let filterProductPrice = products.filter((product) => product.price > 0);
//Step-2
/*
let value = filterProductPrices.reduce(
  (acc, item) => (acc += item.price),
  0
);
console.log(value);
*/

//Step-3
