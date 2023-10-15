const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

  const ingredientsEl = document.querySelector('#ingredients');
  
    ingredients.map((ingredient) => {
    const itemsEls = document.createElement('li');
    itemsEls.textContent = ingredient;
    itemsEls.classList.add('item');
    ingredientsEl.append(itemsEls)
  })