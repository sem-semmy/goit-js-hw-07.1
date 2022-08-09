// 1 Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента
// галереї.
// 2  Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN
// сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з документацією
//  і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй
// готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >,
//     і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться
//  в цьому шаблоні.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const blokGalleri = document.querySelector(".gallery");

const makeGalleri = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
  })
  .join("");

blokGalleri.insertAdjacentHTML("afterbegin", makeGalleri);

blokGalleri.addEventListener("click", (event) => {
  event.preventDefault();
  const element = event.target.dataset.source;
  if (event.target.classList.contains("gallery")) return;

  const instance = basicLightbox.create(`
    <img src="${element}" width="800" height="600">
`);

  instance.show();
});
