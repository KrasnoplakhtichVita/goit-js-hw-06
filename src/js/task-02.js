const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsListOptions = ingredients => {
return ingredients.map(ingredient => { 
const itemOfList = document.createElement("li");
itemOfList.textContent = ingredient;
itemOfList.classList.add("item");

return itemOfList;
});
};

const elements = makeIngredientsListOptions(ingredients);
ingredientsList.append(...elements);
console.log(ingredientsList);