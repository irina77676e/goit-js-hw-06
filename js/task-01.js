const numberOfcategories = document.querySelector("ul#categories");
const accNumbers = numberOfcategories.querySelectorAll("li.item");

console.log(`Number of categories: ${accNumbers.length}`);

for (const el of accNumbers) {

const categoryCount = el.querySelector('h2').textContent;
const elementsCount = el.querySelectorAll('li').length;
    console.log(`Category: ${categoryCount} 
    Elements: ${elementsCount}`)

}