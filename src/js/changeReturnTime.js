import { lockScroll, unlockScroll } from './scrollBlocker';

export default function changeReturnTime() {
    const changeReturnTimeModal = document.querySelector('.js-change-return-time');
    let tableOpen = false;

    const openBtns = Array.from(document.querySelectorAll('.js-open-change-return-time'));
    const closeBtns = Array.from(document.querySelectorAll('.js-close-change-return-time'));

    if (!changeReturnTimeModal) return;

    const openTable = () => {
        changeReturnTimeModal.classList.add('shown');
        lockScroll(changeReturnTimeModal);
        tableOpen = true;
    };

    const closeTable = () => {
        changeReturnTimeModal.classList.remove('shown');
        unlockScroll();
        tableOpen = false;
    };

    document.addEventListener('click', event => {
        if (event.target === changeReturnTimeModal && tableOpen) {
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
