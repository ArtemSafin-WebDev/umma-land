import { Swiper, Navigation, EffectFade, Pagination, Autoplay  } from 'swiper';
import { MOBILE_WIDTH } from './constants';

Swiper.use([Navigation, EffectFade, Pagination, Autoplay ]);

export default function homeSlider() {
    // if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
    //     return;
    // }
    const elements = Array.from(document.querySelectorAll('.js-home-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            effect: 'fade',
            watchOverflow: true,
            touchStartPreventDefault: false,
            autoplay: {
                delay: 5000
            },
            loop: true,
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: element.querySelector('.home__slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}
