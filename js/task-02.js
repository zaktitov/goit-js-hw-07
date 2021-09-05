// Напиши скрипт, который для каждого элемента массива
//  ingredients создаст отдельный li, после чего вставит все
// li за одну операцию в список ul.ingredients.Для создания
// DOM - узлов используй document.createElement().
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const arrmap = ingredients.map(item => item).forEach(item => console.log(item));

const list = document.getElementById(`ingredients`);

const elPotato = document.createElement("li");
elPotato.textContent = "Картошка";

const elMushrooms = document.createElement("li");
elMushrooms.textContent = "Грибы";

const elGarlick = document.createElement("li");
elGarlick.textContent = "Чеснок";

const elTomatoes = document.createElement("li");
elTomatoes.textContent = "Помидоры";

const elGreenery = document.createElement("li");
elGreenery.textContent = "Зелень";

const elSpices = document.createElement("li");
elSpices.textContent = "Приправы";

list.prepend(elPotato, elMushrooms, elGarlick, elTomatoes, elGreenery, elSpices);

console.log(list);







