// Используй массив объектов images для создания тегов
//  img вложенных в li.Для создания разметки используй 
//  шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM 
// за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами 
// или гридами через css - классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById(`gallery`);
gallery.classList.add("gallery");
gallery.style.display = "flex";
gallery.style.justifyContent = "space-around";
gallery.style.listStyle = "none"

const imagesMap = images.map(element => (`<li class="gallery__item"><img src=${element.url} alt=${element.alt} width=300;></li>`)).join("");
gallery.insertAdjacentHTML("afterbegin", imagesMap);
console.log(gallery);




// const li = document.createElement("li");
// li.classList.add("gallery__item");
// li.style.width = "300px"

// const imgOne = document.createElement("img");
// imgOne.classList.add("gallery__img");
// imgOne.setAttribute("alt","White and Black Long Fur Cat");
// imgOne.setAttribute("src", "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
// imgOne.style.width = "100%";

// li.append(imgOne);
// gallery.insertAdjacentElement("afterbegin", li)
// gallery.insertAdjacentElement("beforebegin", title);

// const title = document.createElement("h1");
// title.classList.add("gallery__title");
// title.style.fontSize = "24px";
// title.textContent = "My favourite album";
// title.style.color = "green";


