import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onImageItemClick);

let modalWindow;
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
 const onEscapePress = evt => {
        if (evt.code === 'Escape') 
            modalWindow.close();
 };
    
function onImageItemClick(evt) {
    
    const isOrigenImg = evt.target.classList.contains('.gallery__link');

    if (!isOrigenImg) {
        return;
    }
    evt.preventDefault();
    
    const lageImage = evt.target.dataset.source;
    const modalWindow = basicLightbox.create(`
    <img
    src ="${lageImage}">`,
        {
            show: () => {
                window.addEventListener('keydown', onEscapePress);
            },
            close: () => {
                window.removeEventListener('keydown', onEscapePress);
            },
        });
    modalWindow.show()
}

console.log(galleryItems);

