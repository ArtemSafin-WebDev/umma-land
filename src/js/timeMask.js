import Inputmask from 'inputmask';

export default function timeMask() {
    Array.from(document.querySelectorAll('.js-date-input')).forEach(item => {
        const im = new Inputmask({ mask: '99.99.9999', placeholder: '0', showMaskOnHover: false, showMaskOnFocus: true });
        im.mask(item);
    });
    Array.from(document.querySelectorAll('.js-time-input')).forEach(item => {
        const im = new Inputmask({ mask: '99:99', placeholder: '0', showMaskOnHover: false, showMaskOnFocus: true });
        im.mask(item);
    });
}