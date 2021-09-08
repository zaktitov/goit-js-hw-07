// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.getElementById(`validation-input`);
const data = input.dataset.length;

input.addEventListener(`blur`, onBlur);

function onBlur() {
  if (input.value.length !== Number(data)) {
    input.classList.remove(`valid`);
    input.classList.add(`invalid`);
  } else {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
  }
}
