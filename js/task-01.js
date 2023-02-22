const listOfCategories = document.querySelector('#categories');
const listWithClassItem = listOfCategories.querySelectorAll('.item');
console.log(`Number of categories: ${listWithClassItem.length}`);


listWithClassItem.forEach((item) => {
console.log(`Category: ${item.firstElementChild.textContent}`);
console.log(`Elements: ${item.lastElementChild.children.length}`);
});
