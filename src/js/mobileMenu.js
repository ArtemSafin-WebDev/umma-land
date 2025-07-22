export default function mobileMenu() {
    const burger = document.querySelector('.page-header__burger');

    burger.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('mobile-menu-open');
    });
}
