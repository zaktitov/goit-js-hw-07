// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text
//  обновляя свойство font - size.В результате при перетаскивании
//  ползунка будет меняться размер текста.

const controller = document.getElementById("font-size-control");
const spanValue = document.getElementById("text");

spanValue.style.fontSize = controller.value + "px";

controller.addEventListener(
  "input",
  () => (spanValue.style.fontSize = controller.value + "px")
);
