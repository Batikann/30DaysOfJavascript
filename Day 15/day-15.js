class Person {
  constructor(
    firstName = "Emir Batıkan",
    lastName = "UÇAR",
    age = 20,
    country = "Turkey",
    city = "Çanakkale"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }

  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }

  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }

  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }

  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (month < 10) {
      month = "0" + month;
    }
    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

/*

class Student extends Person{
    sayHello(){
        console.log('Hello!!!');
    }
}

let person1 = new Person();
let person2 = new Person("Çağdaş", "UÇAR", "15", "Turkey", "İstanbul");
let students=new Student();
person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'
console.log(person1);
console.log(person2);
console.log(person1.getPersonInfo());
console.log(person1.getSkills);
console.log(Person.favoriteSkill());
console.log(Person.showDateTime());
console.log(students.city);
*/

//LEVEL-1

//Step-1
/*
class Animal{
    constructor(name,age,color,legs){
       this.name=name;
       this.age=age;
       this.color=color;
       this.legs=legs;
    }

    animalInfo(){
        const result=`Name: ${this.name}  Age: ${this.age} Color: ${this.color} Legs: ${this.legs}`;
        return result
    }
}


class Dog extends Animal{

}

class Cat extends Animal{
    animalInfo(){
        const result=`Cat Name: ${this.name}  Age: ${this.age} Color: ${this.color} Legs: ${this.legs}`;
        return result;
    }
}

let animal=new Cat('Karabaş',3,'White',4);
console.log(animal.animalInfo());
*/


/*
ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  static count() {
    let count = 0;
    ages.map((number) => (count += 1));
    return count;
  }

  static sum() {
    let sum = 0;
    ages.map((number) => (sum += number));
    return sum;
  }
  static min() {
    let min;
    ages.sort((a, b) => {
      return a - b;
    });
    return (min = ages[0]);
  }

  static max() {
    let max;
    ages.sort((a, b) => {
      return b - a;
    });
    return (max = ages[0]);
  }

  static range() {
    let range;
    ages.sort((a, b) => {
      return a - b;
    });
    range = ages[ages.length - 1] - ages[0];
    return range;
  }

  static mean() {
    let result = Math.round(this.sum() / this.count());
    return result;
  }

  static median() {
    let stepOne=ages.sort((a,b)=>{
        return a-b;
    });
    let result=((this.count()-1)/2)
    return stepOne[result]
  }

  static mode(){
    let counts=[];
     let uniqArr= new Set(ages);
     for(const a of [...uniqArr]){
        const fileteredAges= ages.filter(age=>age ==a);
        counts.push({age:a,count:fileteredAges.length});
     }
     let maxToMin=[...counts].sort((a,b)=>{
        return b.count-a.count;
     });
     return maxToMin[0];
    }

    static var(){
        let sum=0;
        let mean=this.mean();
        let res=ages.map(age =>age-mean);
        let result=res.map(s =>s**2);
        for (let i = 0; i < result.length; i++) {
            sum +=result[i];
        }
        return sum/res.length;   
    }

    static std(){
        let result=Math.sqrt(this.var());
        return result.toFixed(1);
    }

    static describe(){
       return `Count: ${this.count()} \nSum: ${this.sum()} \nMin: ${this.min()} \nMax: ${this.max()} \nRange: ${this.range()} \nMean: ${this.mean()} \nMedian: ${this.median()} \nMode:(${this.mode().age}, ${this.mode().count}) \nVariance: ${this.var()} \nStandart Deviation: ${this.std()}`
    }
}

let statistics = new Statistics();
console.log(Statistics.describe());
*/

const expenses=[1000,2000,3000];
const incomes=[5000,6000,7000];

class PersonAccount{
    constructor(firstName,lastName,incomes,expenses){
            this.firstName=firstName;
            this.lastName=lastName;
            this.incomes=incomes;
            this.expenses=expenses;
    }

    totalIncome(){
      let sum=0
      for (let i = 0; i < this.incomes.length; i++) {
        sum +=this.incomes[i];
        
      }
      return sum;
    }

    totalExpense(){
      let sum=0
      for (let i = 0; i < this.expenses.length; i++) {
        sum +=this.expenses[i];
        
      }
      return sum;
    }

    accountInfo(){
      let getFullName=this.firstName + ' ' + this.lastName
      let totalExpense=this.totalExpense();
      let totalIncome=this.totalIncome()
      let result=`FullName: ${getFullName}  Total Expense: ${totalExpense}  Total Income: ${totalIncome}`
      return result
    }

    addIncome(income){
        incomes.push(income);
    }

    addExpense(expense){
      expenses.push(expense);
  }
}


let personAccount=new PersonAccount("Emir Batıkan","UÇAR",incomes,expenses)
console.log(personAccount.addExpense(2000));
console.log(personAccount.accountInfo());


