const inputBOX = document.getElementById("textBox");
const selectBOX = document.getElementById("select1");
const btn = document.getElementById("btn");
const selectValue = document.getElementById("selectValue");
const calculateMassIn=document.getElementById('calculateMassInner')

btn.addEventListener("click", () => {
  if (
    selectBOX.options[selectBOX.selectedIndex].value == "" ||
    inputBOX.value == ""
  ) {
    alert("Değerlerde birisi veya ikisi boş geçilemez!!")
  } else {
    let value = selectBOX.options[selectBOX.selectedIndex].value;
    selectValue.textContent = selectBOX.options[selectBOX.selectedIndex].text;
    calculateMassIn.textContent=inputBOX.value

  }
});
