const numberDOM = document.querySelector(".number");
const mainDivDOM=document.querySelector(".main-div")

document.body.addEventListener("keypress", (e) => {
  numberDOM.textContent = e.keyCode;
  mainDivDOM.textContent=`You Pressed  ${String.fromCharCode(e.keyCode)}`
});
