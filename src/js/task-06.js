const lostFocus = document.querySelector('#validation-input');
lostFocus.addEventListener('blur', tryQuantityOfSymbols);

function tryQuantityOfSymbols(symbol) {

    lostFocus.classList.remove('valid');
    lostFocus.classList.remove('invalid');

    if (symbol.currentTarget.value.length === 6) {
        return lostFocus.classList.add('valid');
    }
    if (symbol.currentTarget.value.length > 6){
        return lostFocus.classList.add('invalid');
    }
}