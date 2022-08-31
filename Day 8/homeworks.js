//LEVEL-2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//Step-1
/*
  let maxSkill=0;
  let test;
  let name;

  for(let [key,value] of Object.entries(users)){
      if (value.skills.length>maxSkill) {
        maxSkill=value.skills.length;
        test=value.skills;
        name=key;
      }
      else{
        console.log(`${name}\n${maxSkill}\n${test}`);
        break;
      }
  }
  */

//Step-2
/*
  let count=0;
  for([key,value] of Object.entries(users)){
    if (value.isLoggedIn==true) {
        count+=1;
    }
  }
console.log(`Login Olmuş Kullanıcı Sayısı: ${count}`);
*/

/*
let count=0;
for([key,value] of Object.entries(users)){
    if (value.points==50) {
        count+=1;
    }
  }
  console.log(`LPuanı 50 olan Kullanıcı Sayısı: ${count}`);
*/

//Step-3
/*
let count=0
const values=Object.values(users)
for (let i = 0; i < values.length; i++) {
    if (values[i].skills.includes('MongoDB') &&values[i].skills.includes('Express') && values[i].skills.includes('React') && values[i].skills.includes('Node') ) {
        count +=1
    }
}
console.log(count);
*/

//console.log(Object.entries(users));
/*
for ([key, value] of Object.entries(users)) {
  if (
    users[key].skills.includes("MongoDB") &&
    users[key].skills.includes("Express") &&
    users[key].skills.includes("React") &&
    users[key].skills.includes("Node")
  ) {
    console.log(users[key]);
  }
}
*/

//LEVEL-3

//Step-1
const userss = [
  {
    firstName: "Emir Batıkan",
    lastName: "UÇAR",
    age: 20,
    country: "Turkey",
    email: "emiruar123@gmail.com",
    password: "1111111",
  },
  {
    firstName: "Emir Batıkan",
    lastName: "UÇAR",
    age: 20,
    country: "Turkey",
    email: "emmierrr@gmail.com",
    password: "1234567",
  },
  {
    firstName: "Emir Batıkan",
    lastName: "UÇAR",
    age: 20,
    country: "Turkey",
    email: "batikanemiru@gmail.com",
    password: "1231231",
  },
  {
    firstName: "Emir Batıkan",
    lastName: "UÇAR",
    age: 20,
    country: "Turkey",
    email: "batikan17@gmail.com",
    password: "3333333",
  },
  {
    firstName: "Emir Batıkan",
    lastName: "UÇAR",
    age: 20,
    country: "Turkey",
    email: "ebati@gmail.com",
    password: "3453457",
  },
];

/*
const signUp = (email) => {
  let status;
  for (let i = 0; i < userss.length; i++) {
    if ( userss[i].email== email) {
      status=false;
      break;
    }
    else{
      status=true;
    }
  }
  status==true ? console.log(`${email} başarıyla sisteme kayıt olmuştur!!`) : console.log(`${email} sistem de zaten kayıtlı!!`);
};

signUp('batik17@gmail.com');
*/

//Step-2
/*
const signIn = (email, password) => {
  let status;
  for (let i = 0; i < userss.length; i++) {
    if (userss[i].email == email && userss[i].password==password) {
      status = true;
      break;
    } else {
      status = false;
    }
  }
  status == true
    ? console.log("Başarıyla Oturum Açılmıştır..")
    : console.log("Eposta ya da şifre hatalı");
};

signIn("ebati@gmail.com",'3453457');
*/

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//Step-3A
/*
const rateProduct=()=>{
  for (let i = 0; i < products.length; i++) {
    for (let x = 0; x < products[i].ratings.length; x++) {
      console.log(`${products[i].name.toUpperCase()} ${products[i].ratings[x].rate}`);  
    }
 }
}
rateProduct();
*/

//Step-3B
/*
const averageRating =()=>{
  let sum=0;
  let count=0;
  for (let i = 0; i < products.length; i++) {
    for (let x = 0; x < products[i].ratings.length; x++) {
      sum +=products[i].ratings[x].rate;
      count++;
    }
 }
 console.log(sum/count);
}

averageRating()
*/