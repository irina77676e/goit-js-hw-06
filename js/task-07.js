const changeFontsize = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

changeFontsize.addEventListener("input", event => {changeText.style.fontSize = event.currentTarget.value +"px"});

