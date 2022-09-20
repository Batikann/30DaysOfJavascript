/*
let data =true;

const getData=()=>{
   return new Promise((resolve,reject)=>{
    if (data) {
        resolve('Veri Sağlandı...');
    }
    else{
        reject('Veri alanamadı...')
    }
   });
}

console.log(getData().then(response=>console.log(response)));
*/

/*
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
*/

/*
const promise=new Promise((resolve,reject)=>{
  resolve('Success');
  reject('failure');
})

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

    */

//PROMISE
/*
    const url='https://restcountries.com/v2/all';
    fetch(url)
         .then(response=>response.json())
         .then(data=>console.log(data))
         .catch(err=>console.error(err));
         */

//async await

/*
  const asyncEx= async()=>{
   try {
    const response= await (await fetch('https://restcountries.com/v2/all')).json()
    console.log(response);
   } catch (error) {
    console.log(error);
   }
  }
  asyncEx()
  */

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

//LEVEL-1
/*
const countriesAPIEx=async()=>{
    const response= await fetch(countriesAPI)
    const data=await response.json();
    let result=[...data].map(res=>{
        return [{Name:res.name,Capital:res.capital,Population:res.population,Languages:res.languages,Area:res.area}]
    })

    console.log(result);
}
countriesAPIEx();
*/

//LEVEL-2
/*
 const CatAPIEx= async()=>{
    const response=await (await fetch(catsAPI)).json()
    const catNames=[];
    let result=[...response].map(res=>{
        return catNames.push({Name:res.name})
    })
    console.log(catNames);
 }

 CatAPIEx();
 */

//LEVEL-3

//Step-1
/*
 const catAPIEx=async()=>{
    const response =await (await fetch(catsAPI)).json();
    const result=[...response].map(res=>{
      return [{Name:res.name,Metric:res.weight.metric}];
    })
    console.log(result);
 }
 catAPIEx();
 */

//Step-2

/*
 const countriesAPIEx=async()=>{
   const response=await (await fetch(countriesAPI)).json();
   const result=[...response].sort(function(a,b) {
      return b.population-a.population;
   })
   for (let i = 0; i < 10; i++) {
    console.log(result[i]);
    
   }
 }

 countriesAPIEx();
 */

//Step-3
const countriesAPIEx = async () => {
  const newArr = [];
  const response = await (await fetch(countriesAPI)).json();
  const res = [...response].map(function(i) {
    return i.languages;
  });
  
  for (let i = 0; i < res.length; i++) {
    for (let x = 0; x < res[i].length; x++) {
       newArr.push(res[i][x].name);
    }
  }

  const result=new Set(newArr)
  console.log([...result].length);
    
  
};

countriesAPIEx();
