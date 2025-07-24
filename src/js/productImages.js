import gsap from 'gsap/all';

import { Swiper, Pagination } from 'swiper';

Swiper.use([Pagination]);

export default function productImages() {
    const elements = Array.from(document.querySelectorAll('.js-product-images-slider'));

    elements.forEach(element => {
        let mm = gsap.matchMedia();
        mm.add('(max-width: 640px)', () => {
            const container = element.querySelector('.swiper-container');
            const instance = new Swiper(container, {
                effect: 'fade',
                watchOverflow: true,
                touchStartPreventDefault: false,
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: element.querySelector('.product__images-pagination'),
                    type: 'bullets',
                    clickable: true
                }
            });
            return () => {
                instance.destroy();
            };
        });
    });

    const toggles = Array.from(document.querySelectorAll('.product__images-toggle-btn'));
    toggles.forEach(toggle =>
        toggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('product-images-shown');
        })
    );
}
