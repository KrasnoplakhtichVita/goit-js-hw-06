const colorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = document.body.style.backgroundColor;
})