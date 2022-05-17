import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onImageItemClick);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
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
    </div> `;
    }).join('');
}
    
function onImageItemClick(item) {
    if (item.target.nodeName !== "IMG") {
        return;
    }
    item.preventDefault();

  
    const instance = basicLightbox.create(`
    <img
    src ="${item.target.dataset.source}">`,
    {
        onShow: (instance) => {
            const listener = function (evt) {
                if (evt.key === "Escape") {
                    console.log('key', evt.key);
                    document.removeEventListener('keydown', listener);
                }
                return instance.close();
                };
            document.addEventListener('keydown', listener);
        },
    }
        );
    instance.show();
}
// console.log(galleryItems);

