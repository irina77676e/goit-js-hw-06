const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = document.querySelector('#ingredients');




function makeNewLi(el) {


  return ingredients.map((element) => {

    const createElLi = document.createElement('li');

    createElLi.classList.add('item');
    
    createElLi.textContent = element;
    return createElLi;
})

}




const elements = makeNewLi(ingredients);
console.log(elements);
refs.append(...elements);