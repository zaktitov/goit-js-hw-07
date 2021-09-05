// Посчитает и выведет в консоль количество категорий в ul#categories,
//то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет 
// и выведет в консоль текст заголовка элемента(тега h2) и
//  количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4



const listItems = document.querySelectorAll(`#categories > li`);
console.log(`In list ${listItems.length} categories`);

const itemsContent = document.querySelectorAll(".item h2").forEach(el => console.log(`Категория: ${el.textContent}. Количество: ${el.nextElementSibling.children.length}`));







