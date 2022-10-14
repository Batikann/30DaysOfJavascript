const btn = document.getElementById("btn");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const pword=document.getElementById('pword');
const tel = document.getElementById("tel");

btn.addEventListener("click", () => {
  validateInputs();
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidTelephoneNumb=(tel)=>{
  const telValid=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g
  return telValid.test(tel);
}

const isValidPassword=(pword)=>{
   const pwordVal=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}/g
   pwordVal.test(pword);
}

const validateInputs = () => {
  const fNameVal = fName.value.trim();
  const lNameVal = lName.value.trim();
  const emailVal = email.value.trim();
  const pwordVal=pword.value.trim();
  const telVal = tel.value.trim();


  if (fNameVal === "") {
    fName.classList = "error";
  } else {
    fName.classList = "success";
  }

  if (lNameVal === "") {
    lName.classList = "error";
  } else {
    lName.classList = "success";
  }

  if (emailVal === "") {
    email.classList="error";
  } else if (!isValidEmail(emailVal)) {
    email.classList = "error";
  }
  else{
    email.classList="success"
  }

  if (telVal==="") {
     tel.classList="error";
  }
  else if (!isValidTelephoneNumb(telVal)) {
    tel.classList="error";
    console.log("31");
  }
  else{
    tel.classList="success";
  }
  if (pwordVal==="") {
     pword.classList="error";
  }
  else if (isValidPassword(pwordVal)) {
    pword.classList="error"
  }
  else{
    pword.classList="success"
  }
};
