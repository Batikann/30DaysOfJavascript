//g ==> g global flag iki ters parantezin içine yuazdığımız şeyi tüm cümle de arar

// /o+/g ==>burda mesela o dan sonra o geliyorsa guruplar Alooo => burda 3 o yu grup yapar.

// /bura?da/ ==> bu şekil de bir regex yaparak a yı veya yaptık yanı a olsa da seçicek olmasa da seçicek

// /o*/g ==> o+ gibi çalışır

// /./ ==>Bütün karakterleri tek tek seçer.  /A./g a dan sonra bir karakteri daha seçer /.A/ a dan bir önce ki karakteri seçer.  /.A./ => bir önce ki ve bir sonra ki karakteri seçer.

// /B.nce/ ==> 2.karakterin ne olduğunun önemi yok Bance Bonce Bince hepsini seçer.

// /\w/ ==> Matches any word character (alphanumeric & underscore)

// /\w/ ==> non alphanumeric & underscore

// /\s/ ==> sadece Boşlukları alır

// /\S/ ==> Boşluk dışında ki tüm yerleri alır.


// /\d/ ==> sadece sayıları alır

// /\D/ ==> Sayı dışında ki her şeyi alır.

// /.{x}/ ==> Karakterleri x li gruplar halinde yaz.

// /.{x,y}/ ==> Karakterleri x veya y  li gruplar halinde yaz.

// /[a-zA-Z0-9]at/ ==> a dan z ye 0 dan 9 a başlayan her şeyi ve at ile biten her şeyi gruplar.

// without flag

/*
let pattern = 'love'
let flag='g'
let regEx = new RegExp(pattern,flag)
console.log(regEx);
*/

/*
let str='I Love Javascript.'
let pattern=/Love/gi
let result=str.match(pattern)
console.log(result);
*/


/*
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)
*/


/*
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';

let matchReplaced=txt.replace(/python/gi,'Javascript');
console.log(matchReplaced);
*/


/*
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

let newTxt=txt.replace(/%/g,'')
console.log(txt);
console.log(newTxt);
*/

/*
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ';

let result=txt.match(/[Aa]pple/g)
console.log(result);
*/


/*
let pattern=/\d+/g
const txt = 'This regular expression example was made in January 12,  2020.'
let result=txt.match(pattern)
console.log(result);
*/
