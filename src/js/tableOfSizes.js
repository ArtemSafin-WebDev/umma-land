import { lockScroll, unlockScroll } from './scrollBlocker';

export default function tableOfSizes() {
    const tableOfSizes = document.querySelector('.js-table-of-sizes');
    let tableOpen = false;

    const openBtns = Array.from(document.querySelectorAll('.js-open-sizes-table'));
    const closeBtns = Array.from(document.querySelectorAll('.js-close-sizes-table'));

    if (!tableOfSizes) return;

    const openTable = () => {
        tableOfSizes.classList.add('shown');
        lockScroll(tableOfSizes);
        tableOpen = true;
    };

    const closeTable = () => {
        tableOfSizes.classList.remove('shown');
        unlockScroll();
        tableOpen = false;
    };

    document.addEventListener('click', event => {
        if (event.target === tableOfSizes && tableOpen) {
            closeTable();
        }
    });

    openBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            openTable();
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            closeTable();
        });
    });
}
