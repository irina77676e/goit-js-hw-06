

const changeColorbtn = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body");

changeColorbtn.addEventListener('click', (event) => {
  getRandomHexColor()
  nameOfColor.textContent = body.style.backgroundColor
})

function getRandomHexColor() {
  return body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
