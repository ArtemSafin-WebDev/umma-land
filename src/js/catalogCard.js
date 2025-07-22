import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function catalogCard() {
    const initializeCatalogCardGallery = element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            loop: false,
            navigation: {
                nextEl: element.querySelector('.catalog__card-image-gallery-arrow--next'),
                prevEl: element.querySelector('.catalog__card-image-gallery-arrow--prev')
            }
        });
    };

    const initializeCatalogCardGalleries = () => {
        const elements = Array.from(document.querySelectorAll('.js-catalog-card-gallery'));
        elements.forEach(element => {
            initializeCatalogCardGallery(element);
        });
    };

    initializeCatalogCardGalleries();

    window.catalogCard = {};

    window.catalogCard.initializeCatalogCardGallery = initializeCatalogCardGallery;

    window.catalogCard.initializeCatalogGalleries = initializeCatalogCardGalleries;
}
