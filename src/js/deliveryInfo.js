import { lockScroll, unlockScroll } from './scrollBlocker';

export default function deliveryInfo() {
    const tableOfSizes = document.querySelector('.js-delivery-info');
    let tableOpen = false;

    const openBtns = Array.from(document.querySelectorAll('.js-delivery-info-open'));
    const closeBtns = Array.from(document.querySelectorAll('.js-delivery-info-close'));

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
