const slider = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');

// console.dir(slider);
slider.addEventListener("input", (event) => {
textInput.style.fontSize = `${event.currentTarget.value}px`;
console.log(textInput);
})