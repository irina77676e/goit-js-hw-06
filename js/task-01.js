const numberOfcategories = document.querySelector("ul#categories");
const accNumbers = numberOfcategories.querySelectorAll("li.item");

console.log(`Number of categories: ${accNumbers.length}`);

accNumbers.forEach((el) => {
console.log(`Category: ${el.firstElementChild.textContent} 
    Elements: ${el.lastElementChild.children.length}`)

})