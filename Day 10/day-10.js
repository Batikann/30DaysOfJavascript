//Setin Arryden farkı her bir eleman unique olmalıdır.
//Mapin objecten farkı objecte keyleri string olarak oluşturabilirken  map ile keyleri istediğimiz veri tipinde oluşturabiliriz.

//SET
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

  /*
const langSet  = new Set(languages);
const counts=[];
for(const l of langSet){
    const filteredLang=languages.filter(lng=> lng==l)
    counts.push({lang:l,count:filteredLang.length});
}

console.log(counts);
*/

/*
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let B=new Set(b);
let c=a.filter(num =>!B.has(num));
console.log(c);
*/

//MAP
const map=new Map();
map.set('name','Emir')
console.log(map);
