import { MOBILE_WIDTH } from './constants';
import { lockScroll, unlockScroll } from './scrollBlocker';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function filters() {
    const catalogFilters = document.querySelector('.js-catalog-filters');

    if (catalogFilters) {
        const btn = catalogFilters.querySelector('.catalog__filters-btn');
        const dropdown = catalogFilters.querySelector('.catalog__filters-dropdown');
        const closeBtns = Array.from(document.querySelectorAll('.js-filters-close'));

        const openDropdown = () => {
            btn.classList.toggle('active');
            dropdown.classList.toggle('active');

            if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
                lockScroll(dropdown);
            }
        };

        const closeDropdown = () => {
            btn.classList.remove('active');
            dropdown.classList.remove('active');

            if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
                unlockScroll();
            }
        };

        btn.addEventListener('click', event => {
            event.preventDefault();
            openDropdown();
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                closeDropdown();
            })
        })

        document.addEventListener('click', event => {
            if (event.target.matches('.js-catalog-filters') || event.target.closest('.js-catalog-filters')) return;
            closeDropdown();
        });

        if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
            const SPEED = 0.5;

            const openAccordion = element => {
                gsap.to(element, {
                    height: 'auto',
                    duration: SPEED,
                    onComplete: () => ScrollTrigger.refresh()
                    
                });
            };
            const closeAccordion = element => {
                gsap.to(element, {
                    height: 0,
                    duration: SPEED,
                    onComplete: () => ScrollTrigger.refresh()
                });
            };

            const elements = Array.from(document.querySelectorAll('.catalog__filters-accordion'));

            elements.forEach(element => {
                const btn = element.querySelector('.catalog__filters-accordion-btn');
                const content = element.querySelector('.catalog__filters-accordion-content');

                btn.addEventListener('click', event => {
                    event.preventDefault();

                    if (element.classList.contains('active')) {
                        closeAccordion(content);
                    } else {
                        openAccordion(content);
                    }
                    element.classList.toggle('active');
                });
            });
        }
    }
}
