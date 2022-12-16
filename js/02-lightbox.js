import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEl = document.querySelector(".gallery");

const selectorGallery = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
const createGalleryMarkup = galleryItems.map(selectorGallery).join("");
galleryItemsEl.insertAdjacentHTML("beforeend", createGalleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
