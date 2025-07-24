import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function recommendedSlider() {
    const elements = Array.from(document.querySelectorAll('.js-recommended-gallery'));

    const initializeRecommendedGallery = element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            loop: true,
            navigation: {
                nextEl: element.querySelector('.recommended__products-card-gallery-arrow--next'),
                prevEl: element.querySelector('.recommended__products-card-gallery-arrow--prev')
            }
        });
    };

    window.recommendedCard = {};
    window.recommendedCard.initializeRecommendedGallery = initializeRecommendedGallery;

    elements.forEach(element => {
        initializeRecommendedGallery(element);
    });
}
