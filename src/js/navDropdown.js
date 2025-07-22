export default function navDropdown() {
    const elements = Array.from(document.querySelectorAll('.page-header__nav-list-item')).filter(
        item => !!item.querySelector('.page-header__nav-dropdown')
    );

    elements.forEach(element => {
        const link = element.querySelector('.page-header__nav-link');
        const dropdown = element.querySelector('.page-header__nav-dropdown');
        const back = element.querySelector('.page-header__nav-back-link');

        link.addEventListener('click', event => {
            if (!window.matchMedia('(max-width: 640px)').matches) return;
            event.preventDefault();
            dropdown.classList.add('active');
        });

        back.addEventListener('click', event => {
            event.preventDefault();
            dropdown.classList.remove('active');
        });
    });
}
