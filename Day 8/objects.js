//SCOP

//name="Batıkan"; //let veya var const gibi tanımlamadıysan o değişken window nesnesi olur.

let name = "Batıkan";
let surname = "UÇAR";
function letLearnScope() {
  console.log(name, surname);
  if (true) {
    let name = "Ahmet";
    let surname = "memet";
    console.log(name, surname);
  }
  console.log(name, surname);
}

//letLearnScope();

//Var ile oluşturulan değişkenler fonksiyon kapsamında
//let ve const ile oluşturulan değişkenler blok kapsamında

//Object.frezze() ==>Objecte hiç bir şey ekleyemeyiz silemeyiz güncelleyemeyiz.
//Object.seal() ==> Objeye ekleyemeyiz silemeyiz ama güncelleriz.

//OBJECT
const person = {
  name: "Emir",
  surname: "UÇAR",
  age: 20,
  isMarried: false,
  skills: ["HTML", "CSS", "Javascript", "C#"],
  "phone number": +905444444444,
  getFullName: function () {
    return `${this.name} ${this.surname}`;
  },
};

console.log(person.getFullName());
