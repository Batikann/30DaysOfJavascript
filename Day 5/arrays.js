
const arr=[3,5,7];
const arr2=['Emir Batıkan',21,'Uçar'];
console.log(arr2);

let js='Javascript';
console.log(js.split(''));

const arr3=Array(5).fill('x');// dizinin içini 5 tane x ile doldurur.
console.log(arr3.concat(arr2,arr,10,12,12));//iki diziyi birleştirir.

console.log(arr2.indexOf('Uçar'));//yazdığımız elemanın dizde ki indexini soldan başlayarak gösteriyor.
console.log(arr2.indexOf(22));//yazdığımız eleman dizide yok ise -1 döndürür.

const arr4=[2,3,2,3,33,2];
console.log(arr4.lastIndexOf(2));//son indexten başlayarak aramaya başlar.

const nums=[1,2,3,4,5,6];
//console.log(nums.includes(5));//yazdığımız elemanın dizide olup olmadığını kontrol ediyor. varsa true yoksa false döner.
//console.log(Array.isArray(nums));//dizi olup olmadığını kontrol etmek için kullanılır.

/*
console.log(nums.join());
console.log(nums.join(''));
console.log(nums.join(' '));
console.log(nums.join(', '));
console.log(nums.join(' # '));
*/

//console.log(nums.slice(1,3));
//console.log(nums.splice(3,3,7,8,9));
//console.log(nums.push(123));
//console.log(nums);


var lastItem=nums.pop();
nums.shift()//baştan değer çıkartır pop sondan çıkartır.
nums.unshift(3)//dizinin başına değer ekler.
console.log(nums.reverse());
console.log('Batıkan'.split('').reverse().join(''));
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  export{webTechs,nums,arr4}

  console.log(webTechs.sort().reverse());
