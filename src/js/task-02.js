const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map((ingredient) => { 
const itemOfList = document.createElement("li");
itemOfList.textContent = ingredient;
itemOfList.classList.add("item");

return itemOfList;
});


ingredientsList.append(...ingredientsArray);
console.log(ingredientsList);
