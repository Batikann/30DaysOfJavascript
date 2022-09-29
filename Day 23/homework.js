const inputBoxDOM = document.getElementById("inputBox");
const alertBox = document.getElementById("alert");
const btn = document.getElementById("btn");
const numbersCollepse = document.querySelector(".numbers-collapse");
let liDOM = document.querySelectorAll("li");

let block;

btn.addEventListener("click", () => {
  if (inputBoxDOM.value == "") {
    alertBox.textContent = "Değer Boş Geçilemez!!";
  } else if (!/^\d+$/.test(inputBoxDOM.value)) {
    alertBox.textContent = "Sadece Sayı Giriniz!!";
  } else {
    numbersCollepse.innerHTML = "";
    for (let i = 0; i < parseInt(inputBoxDOM.value); i++) {
      if (i % 2 == 0) {
        block = document.createElement("li");
        block.classList = "even-numbers";
        block.textContent = i;
        numbersCollepse.appendChild(block);
      } else {
        if (isPrime(i) || i==2) {
          block = document.createElement("li");
          block.classList = "prime-numbers";
          block.textContent = i;
          numbersCollepse.appendChild(block);
        } else {
          block = document.createElement("li");
          block.classList = "odd-numbers";
          block.textContent = i;
          numbersCollepse.appendChild(block);
        }
      }
    }
  }
  inputBoxDOM.value = "";
});

function isPrime(num) {
  // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for (let i = 3; i <= s; i += 2) {
    // start from 3, stop at the square, increment in twos
    if (num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}
