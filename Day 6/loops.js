/*
for (let i = 1; i <=5; i++) {
    console.log(`${i} * ${i} = ${i*i}`);
}
*/

/*
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let newArr=[];

for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);
*/

const numbers=[1,2,3,4,5];
let sum=0;
for (let i = 0; i < numbers.length; i++) {
    sum +=numbers[i];
}

for(number of numbers){
    console.log(number);
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  for (const tech of webTechs) {
    console.log(tech[0]) // get only the first letter of each element,  H C J R N M
  }

  for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }

  
  for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }