// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка 'незнакомец'.

const span = document.getElementById(`name-output`);
const input = document.getElementById(`name-input`);
// input.addEventListener(`input`, input =>
//   input.value === null
//     ? (span.textContent = `незнакомец`)
//     : (span.textContent = input.currentTarget.value)
// );

input.addEventListener(`input`, (input) => {
  
  const value = input.currentTarget.value;

  if (value !== "") {
    span.textContent = value;
  } else {
    span.textContent = "незнакомец";
  }
});
