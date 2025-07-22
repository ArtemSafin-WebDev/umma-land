export default function fixedHeader() {
    const fixedHeader = document.querySelector('.js-fixed-header');

    if (!fixedHeader) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            fixedHeader.classList.add('fixed');
        } else {
            fixedHeader.classList.remove('fixed');
        }
    })
}