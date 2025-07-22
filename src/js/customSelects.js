import Choices from 'choices.js';
import { MOBILE_WIDTH } from './constants';

export default function customSelects() {
   

    function initializeCustomSelects() {
        if (window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches) {
            return;
        }
        const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));

        customSelects.forEach(select => {
            new Choices(select, {
                searchEnabled: false,
                itemSelectText: '',
                shouldSort: false
            });
        })
    }

    initializeCustomSelects();
   


    window.initialzeCustomSelects = initializeCustomSelects;
    
}