import { MOBILE_WIDTH } from './constants';
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function searchModal() {
    let searchOpen = false;

    const searchCloseBtn = document.querySelector('.page-header__mobile-search-close-btn');
    const searchOpenBtn = document.querySelector('.page-header__search-btn')
    const searchInput = document.querySelector('.page-header__mobile-search-input')
    const search = document.querySelector('.page-header__mobile-search');
    const searchSubmit = document.querySelector('.page-header__mobile-search-submit')
    const isMobile = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches;

    if (!isMobile) {
        const openSearch = () => {
            if (searchOpen) return;
            document.body.classList.add('search-open');
            lockScroll(search);

            searchOpen = true;
        };

        const closeSearch = () => {
            if (!searchOpen) return;
            document.body.classList.remove('search-open');
            unlockScroll();

            searchOpen = false;
        };

        searchCloseBtn.addEventListener('click', event => {
            event.preventDefault();
            closeSearch();
        })

        searchOpenBtn.addEventListener('click', event => {
            event.preventDefault();
            openSearch();
        });

        search.addEventListener('click', event => {
            if (event.target === search) {
                closeSearch();
            }
        })
    } else {
        const handleSearch = () => {
            if (searchInput.value.trim() !== '') {
                document.body.classList.add('search-open');
            } else {
                document.body.classList.remove('search-open');
            }
        }


        handleSearch();


        searchInput.addEventListener('input', () => {
            handleSearch();
        });

        searchSubmit.addEventListener('click', event => {
            event.preventDefault();
            searchInput.value = '';
            handleSearch();
        })
    }
}
