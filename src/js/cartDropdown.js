import { MOBILE_WIDTH } from './constants';
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function cartDropdown() {
    function initializeCart() {
        const btn = document.querySelector('.js-open-cart');
        const pageHeaderCart = document.querySelector('.page-header__cart');
        const dropdown = document.querySelector('.page-header__cart-dropdown');
        const closeCart = document.querySelector('.js-cart-close');

        if (!pageHeaderCart || !btn || !dropdown || !closeCart) return;
        let dropdownOpen = false;

        const openDropdown = () => {
            if (dropdownOpen) return;
            pageHeaderCart.classList.add('active');
            if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
                lockScroll(dropdown);
            }

            dropdownOpen = true;
        };
        const closeDropdown = () => {
            if (!dropdownOpen) return;
            pageHeaderCart.classList.remove('active');
            if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
                unlockScroll();
            }
            dropdownOpen = false;
        };

        pageHeaderCart.addEventListener('mouseenter', () => {
            openDropdown();
        });
        pageHeaderCart.addEventListener('mouseleave', () => {
            closeDropdown();
        });

        btn.addEventListener('click', event => {
            event.preventDefault();

            openDropdown();
        });

        closeCart.addEventListener('click', event => {
            event.preventDefault();

            closeDropdown();
        });

        document.addEventListener('click', event => {
            if (event.target.matches('.page-header__cart') || event.target.closest('.page-header__cart')) return;

            closeDropdown();
        });
    }


    initializeCart();

    window.initializeCart = initializeCart;
}
