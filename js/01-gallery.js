import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryItem = creategalleryItems(galleryItems);

function creategalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class = "galllery__item">
        <a href = "${original}">
        <img src = "${preview}" data-source = "${original}" alt = "${description}"/>
        </a>
        </div>`;
        });
}

gallery.append(galleryItem);


console.log(galleryItem);
