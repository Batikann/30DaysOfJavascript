//primitive tipler de (string,boolean,null,number,undefined,symbol) doğrudan değer ile karşılaşırız

/*
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
*/


//non-primitive tipler de(object,array,function) değere erişmek için referans değerler ile çalışırsınız.

/*
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
*/
//----------------------------------------------------------------------------------------------
/*
//Tüm referanslarda const kullanın.var kullanmaktan kaçının.
// kötü
var a = 1;
var b = 2;

// iyi
const a = 1;
const b = 2;

//Eğer referansları yeniden tanımlayacaksanız var yerine let kullanın çünkü let block-scope var function-scope dir.

// kötü
var count = 1;
if (true) {
  count += 1;
}

// iyi
let count = 1;
if (true) {
  count += 1;
}

//Unutmayalım ki hem let hem const block elemandır.
// const ve let sadece tanımlandıkları yaşam alanında erişilebilir olacaktır.
{
    let a = 1;
    const b = 1;
  }
  console.log(a); // ReferenceError (Referans Hatası)
  console.log(b); // ReferenceError (Referans Hatası)
*/

//----------------------------------------------------------------------------------------------------------------

//Nesne yaratılırken literal sözdizimini kullanın
/*
// kötü
const item = new Object();

// iyi
const item = {};
*/
/*
function getKey(k) {
    return `a key named ${k}`;
  }
  
  // kötü
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;
  
  // iyi
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };


  //Metodlar da shorthand tekniğini kullanın.

  // kötü
const atom = {
    value: 1,
  
    addValue: function (value) {
      return atom.value + value;
    },
  };
  
  // iyi
  const atom = {
    value: 1,
  
    addValue(value) {
      return atom.value + value;
    },
  };
  */

  //Propertyler'de de shorthand tekniğini kullanın.
  /*
  const lukeSkywalker = 'Luke Skywalker';

// kötü
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// iyi
const obj = {
  lukeSkywalker,
};
*/

/*
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// kötü
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// iyi
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};

*/


const arr = [1, 2, 3, 4];

// kötü
/*
const first = arr[0];
const second = arr[1];
*/

// iyi
const [first, second] = arr;
console.log(first);
