const changeFontsize = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

changeText.style.fontSize = changeFontsize.value + 'px';

const textResizing = () => {
  changeText.style.fontSize = `${changeFontsize.value}px`;
};

changeFontsize.addEventListener('input', textResizing);