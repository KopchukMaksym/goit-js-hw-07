import { galleryItems } from "./gallery-items.js";
// Change code below this line
const blockGallery = document.querySelector(".gallery");

const addedImg = () => {
    const images = galleryItems
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
    return images;
};
console.log(addedImg());
const imagesBlock = addedImg();
blockGallery.insertAdjacentHTML("beforebegin", imagesBlock);
