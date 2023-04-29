import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItem = creategalleryItems(galleryItems);

function creategalleryItems(items) {
    return items
      .map(({ preview, original, description }) => {
        return `<div class = "galllery__item">
        <a class = "gallery__link" href = "${original}">
        <img class = "gallery__image" src = "${preview}" 
        data-source = "${original}" alt = "${description}"/>
        </a>
        </div>`;
      })
      .join(" ");
}

gallery.insertAdjacentHTML('beforeend', galleryItem);


console.log(galleryItem);
