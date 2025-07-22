import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function stickyProduct() {
    const pageHeader = document.querySelector('.page-header');
    // ScrollTrigger.matchMedia({
    //     '(min-width: 641px) and (max-width: 1024px)': () => {
    //         ScrollTrigger.create({
    //             trigger: '.js-sticky-product-sidebar',
    //             start: 'top top',
    //             endTrigger: '.js-sticky-product-images',
    //             end: 'bottom bottom',
    //             pin: true,
    //             pinSpacing: true
    //         });
    //     },
    //     '(min-width: 1025px)': () => {
    //         ScrollTrigger.create({
    //             trigger: '.js-sticky-product-sidebar',
    //             start: () => `top top+=${pageHeader.offsetHeight}`,
    //             endTrigger: '.js-sticky-product-images',
    //             end: 'bottom bottom',
    //             pin: true,
    //             pinSpacing: true
    //         });
    //     }
    // });
}
