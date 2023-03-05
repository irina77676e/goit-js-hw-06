let counterValue = 0;

const decrementButton = document.querySelector('#counter button[data-action="decrement"]');
const incrementButton = document.querySelector('#counter button[data-action="increment"]');
const valueNow = document.querySelector('#value');

decrementButton.addEventListener('click', ()=>{
   counterValue -=1;
    updateValueNow()
})
incrementButton.addEventListener('click', ()=>{
    counterValue +=1;
    updateValueNow();
})

function updateValueNow(){
    valueNow.textContent = counterValue;
};