/*
Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст 
отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
 Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// Decision // Решение

const ingredientsRef = document.querySelector("#ingredients");

const tmpArray = ingredients.map((ingredient) =>
{
  const oneIngredientRef = document.createElement('li');
  oneIngredientRef.textContent = ingredient;
  return oneIngredientRef
})


ingredientsRef.append(...tmpArray);


