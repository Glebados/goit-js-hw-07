import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEl = document.querySelector(".gallery");

const selectorGallery = (images) => {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href=${original}><img class= "gallery__image" src="${preview}" data-source =${original} alt="${description}"></div>`;
    })
    .join("");
};

const cardImagesMarkup = selectorGallery(galleryItems);

galleryItemsEl.insertAdjacentHTML("afterbegin", cardImagesMarkup);

galleryItemsEl.addEventListener("click", selectGalleryEl);

function selectGalleryEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const onKeydownEsc = (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onKeydownEsc);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onKeydownEsc);
      },
    }
  );
  instance.show();
}
