const changeFontsize = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

changeText.style.fontSize = "16px";

changeFontsize.addEventListener("input", event => {changeText.style.fontSize = event.currentTarget.value +"px"});

