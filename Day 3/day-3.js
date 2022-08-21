//Pre-Increment

//let count=0;
//console.log(++count);
//console.log(count);

//Post-Increment

//let count2=0;
//console.log(count2++);
//console.log(count2);

//Ternary Operators

//let isRaining=false

//isRaining? console.log("You need rain coat."):console.log('No need for rain a coat');

//alert('Welcome to 30 Days Of JavaScript')

//prompt('Bir Sayı Giriniz','5');

//let result=confirm('Emin Misiniz?');

//result ? console.log('Silme İşlemi Başarılı'): console.log('Silme İşlemi Başarısız.');

const date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth() + 1);
console.log(date.getHours());
console.log();

let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDay(),
  dates=date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds();

let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];

console.log(`${dates} ${months[month]} ${year} ${days[day]} ${hour}:${minute}:${second}`);