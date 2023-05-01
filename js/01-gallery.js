import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItem = creategalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryItem);
gallery.addEventListener("click", clickOnImg);

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

const instance = basicLightbox.create(
  `
<img width="100%" height="100%" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  }
);

function clickOnImg(jpg) {
  jpg.preventDefault();
  const datasetSource = jpg.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector("img").src = datasetSource;
  instance.show();
}

function onEscKeyPress(jpg) {
  if (jpg.code !== "Escape") return;
  instance.close();
}
