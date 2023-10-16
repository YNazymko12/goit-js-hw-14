const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

  const ingredientsEl = document.querySelector('#ingredients');
  
  const elements = ingredients.map((ingredient) => {
    const itemsEls = document.createElement('li');
    itemsEls.textContent = ingredient;
    itemsEls.classList.add('item');

    return itemsEls;
  })
  ingredientsEl.append(...elements);