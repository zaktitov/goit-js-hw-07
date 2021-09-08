// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.getElementById(`validation-input`);
const data = input.dataset.length;
console.log(data);

input.addEventListener(`blur`, () => {
  if (input.value.length != data ) {input.classList.toggle(`invalid`) } else {input.classList.toggle(`valid`)
  }
});
