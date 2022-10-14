let date = new Date();
const dateBox = document.getElementById("date");
const mainBox = document.querySelector(".main");
const fNmae = document.getElementById("fNmae");
const lName = document.getElementById("lName");
const cCountry = document.getElementById("cCountry");
const playScore = document.getElementById("play-score");
const addP = document.getElementById("addP");
const alertBox = document.querySelector(".alert");
let divSection;
let pNmae;
let pDate;
let spanCountry;
let spanScore;
let btnDiv;
let ul;
let li;
let btn;
let i;
function getDate() {
  let month = date.toDateString().split(" ");
  let hours = date.toTimeString().split(" ")[0].split(":");
  let result = `${month[1]} ${month[2]},${month[3]} ${hours[0]}:${hours[1]}`;
  return result;
}

//dateBox.textContent=getDate();

addP.addEventListener("click", (e)=>{
  e.preventDefault();
  if (
    fNmae.value == "" ||
    lName.value == "" ||
    cCountry.value == "" ||
    playScore.value == ""
  ) {
    alertBox.textContent = "All fields are required";
  } else {
    divSection = document.createElement("div");
    divSection.classList = "section";
    pNmae = document.createElement("p");
    pDate = document.createElement("p");
    pNmae.classList = "name";
    pDate.classList = "date";
    spanCountry = document.createElement("span");
    spanCountry.classList = "country";
    spanScore = document.createElement("span");
    spanScore.classList = "score";
    divSection.appendChild(pNmae);
    divSection.appendChild(pDate);
    divSection.appendChild(spanCountry);
    divSection.appendChild(spanScore);
    mainBox.appendChild(divSection);
    btnDiv = document.createElement("div");
    btnDiv.classList = "btn-div";
    ul = document.createElement("ul");
    li = document.createElement("li");
    btn = document.createElement("button");
    i = document.createElement("i");
    i.classList = "fa-solid fa-trash";
    btn.classList = "five";
    btn.appendChild(i);
    li.appendChild(btn);
    ul.appendChild(li);
    for (let i = 0; i < 2; i++) {
      li = document.createElement("li");
      if (i == 0) {
        li.textContent = "-5";
        li.classList = "five";
        ul.appendChild(li);
      } else {
        li.textContent = "+5";
        li.classList = "five";
        ul.appendChild(li);
      }
    }
    ul.appendChild(li);
    btnDiv.appendChild(ul);
    divSection.appendChild(btnDiv);
    let name = document.querySelector(".name");
    let date = document.querySelector(".date");
    let country = document.querySelector(".country");
    let score = document.querySelector(".score");
    name.textContent = fNmae.value;
    date.textContent = getDate();
    country.textContent = cCountry.value;
    score.textContent = playScore.value;
  }
});


