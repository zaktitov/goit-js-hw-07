// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// ===============================================================================================
let counterValue = 0;
const spanValue = document.getElementById(`value`);

const decreaseFn = () => {
  spanValue.textContent = counterValue -= 1;
};
const decreasingBtn = document.querySelector(`button[data-action="decrement"]`);
decreasingBtn.addEventListener(`click`, decreaseFn);

const increaseFn = () => {
  spanValue.textContent = counterValue += 1;
};
const increasingBtn = document.querySelector(`button[data-action="increment"]`);
increasingBtn.addEventListener(`click`, increaseFn);
