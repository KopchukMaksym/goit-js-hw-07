import { galleryItems } from "./gallery-items.js";

const blockGallery = document.querySelector(".gallery");

let instance;

const addedImg = () => {
    return galleryItems
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
};

const imagesBlock = addedImg();
blockGallery.insertAdjacentHTML("afterbegin", imagesBlock);

const addEventListener = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    instance = basicLightbox.create(`
        <img src=${event.target.dataset.source}>
    `);

    instance.show();
};

const closeWithEsc = ({ code }) => {
    if (code === "Escape") {
        instance.close();
    }
};

blockGallery.addEventListener("click", addEventListener);
document.addEventListener("keydown", closeWithEsc);
