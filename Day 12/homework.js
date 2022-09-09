//LEVEL 1

//Step-1
/*
let result=(12*(4000+5500))+10000;
console.log(result);
*/

//Step-2
/*
let sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
let val=sortedPoints.sort(function(a,b) {
    return a-b;
});


let result=val[val.length-1]-val[0];
console.log(result);
*/

//Step-3
/*
const is_valid_variable=(value)=>{
    let regex=/first[-]?[Nn]?ame/
    let result=regex.test(value);
    console.log(result);
}

is_valid_variable('firstName');
*/


//LEVEL-2

//sTEP-1

/*
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function fun(str,repeatValue){
    let counts=[];
    let result=[];
    let words = str.split(/\./).join('').split(' ')
    let uniqArr=new Set(words)
    
    for (const l of uniqArr) {
        const filteredWords = words.filter((wrd) => wrd == l);
        counts.push({ lang: l, count: filteredWords.length });
      }
      let maxToMin = [...counts].sort(function (a, b) {
        return b.count - a.count;
      });
     for (let i = 0; i < repeatValue; i++) {
        result.push(maxToMin[i]);
     }
     
     return result;
};

console.log(fun(paragraph,10));
*/

//LEVEL-3
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText=(text)=>{
   let result=text.replace(/[%&#@$;?!,.]/gm,'');
   return result
}



const mostFrequentWords=(txt)=>{ 
    const counts=[];
    let result=[];
    let val=cleanText(txt);
    let words=val.split(/\s/g);
    let uniqArr=new Set(words)
      
    for (const l of uniqArr) {
        const filteredWords = words.filter((wrd) => wrd == l);
        counts.push({ lang: l, count: filteredWords.length });
      }
      let maxToMin = [...counts].sort(function (a, b) {
        return b.count - a.count;
      });
     
        result.push(maxToMin);
     
     
     return result;
} 

console.log(mostFrequentWords(sentence));
console.log(cleanText(sentence));