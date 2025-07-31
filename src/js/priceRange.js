import * as noUiSlider from 'nouislider';

const currencyFormatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 });

const format = {
    from: function(formattedValue) {
        return Number(formattedValue);
    },
    to: function(numericValue) {
        console.log('Numeric value', numericValue);
        return currencyFormatter.format(numericValue);
    }
};
export default function priceRange() {
    const elements = Array.from(document.querySelectorAll('.js-price-range'));

    elements.forEach(element => {
        const min = Number(element.getAttribute('data-min'));
        const max = Number(element.getAttribute('data-max'));
        const start = Number(element.getAttribute('data-start'));
        const end = Number(element.getAttribute('data-end'));
        const margin = element.hasAttribute('data-margin') ? Number(element.getAttribute('data-margin')) : 0;
        noUiSlider.create(element, {
            start: [start, end],
            range: { min, max },
            step: 1,
            margin,
            tooltips: true,
            format: format,
            connect: true
        });
    });
}
