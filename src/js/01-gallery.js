// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';


// Найти строку в html с названием class="gallery"
const galleryEl = document.querySelector('.gallery');
//Добавляем слушателя события 'click' на элемент galleryEl
galleryEl.addEventListener('click', onGalleryCardClick);



//Преобразовал galleryItems в одну строку с параметрами
const galleryCardEl = galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
});

// console.log(galleryCardEl);

//Добавляю galleryCardEl с разметкой по очереди во все карточки
const allCardCreateEl = (galleryCardEl).join(''); 

// console.log(allCardCreateEl);

//Добавляю galleryEl в разметку html ("beforeend" - внутри elem, после всех детей)
galleryEl.insertAdjacentHTML('beforeend', allCardCreateEl);


//Ф-ция:
//     отменяет действия браузера по умолчанию;
//     проверяет условие клика по элементу img (не реагирует на клик на др элементы);
//     открывает слайдер (lightbox)    
function onGalleryCardClick(evt) {
    evt.preventDefault();

    if(!evt.target.classList.contains('gallery__image')) {
        return;
    }

    openLightbox();
};

// console.log(onGalleryCardClick);

//Ф-ция - создает и открывает слайдер (lightbox - библиотека SimpleLightbox, класс SimpleLightbox, метод open()), с оригинальными (большими - original) изображениями;
//     свойства - для описания изображений (подпись изображений):
//             captionSelector - указывает элемент который содержит описание
//             captionType - указывает где именно в элементе находится описание (атрибут, дата-атрибут, текст)
//             captionsData - указывает в каком атрибуте хранится описание
//             captionPosition - указывает положение описания (вверху, внизу, за пределами изображения)
//             captionDelay - указывает задержку появления подписи
//             enableKeyboard - позволяет навигацию с клавиатуры (<- ->) и выход при нажатии Esc
function openLightbox() {
    let lightbox = new SimpleLightbox('.gallery a',
        {
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
            enableKeyboard: true,
        });
    
    lightbox.open();
};

// console.log(galleryItems);
