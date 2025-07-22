export default function filters() {
    const catalogFilters = document.querySelector('.js-catalog-filters');

    if (catalogFilters) {
        const btn = catalogFilters.querySelector('.catalog__filters-btn');
        const dropdown = catalogFilters.querySelector('.catalog__filters-dropdown');
        const closeBtns = Array.from(document.querySelectorAll('.js-filters-close'));

        const openDropdown = () => {
            btn.classList.toggle('active');
            dropdown.classList.toggle('active');
        };

        const closeDropdown = () => {
            btn.classList.remove('active');
            dropdown.classList.remove('active');
        };

        btn.addEventListener('click', event => {
            event.preventDefault();
            openDropdown();
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                closeDropdown();
            });
        });

        document.addEventListener('click', event => {
            if (event.target.matches('.js-catalog-filters') || event.target.closest('.js-catalog-filters')) return;
            closeDropdown();
        });

        const elements = Array.from(document.querySelectorAll('.catalog__filters-accordion'));

        elements.forEach(element => {
            const btn = element.querySelector('.catalog__filters-accordion-btn');
            const content = element.querySelector('.catalog__filters-accordion-content');

            btn.addEventListener('click', event => {
                event.preventDefault();
                content.classList.toggle('active');
            });
        });
    }
}
