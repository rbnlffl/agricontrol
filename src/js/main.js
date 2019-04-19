import jump from 'jump.js';
import './polyfills';

const navigation = document.querySelector('.header__navigation');
const jumpLinks = document.querySelectorAll('[data-jump]');
const scrollToNode = event => {
    jump(event.target.dataset.jump, {
        offset: -(navigation.clientHeight)
    });
    navigation.classList.remove('header__navigation--translated');
    event.preventDefault();
};
const cameFromAnotherPageWithHash = () => {
    if (location.hash) {
        const section = `[data-${location.hash.substring(1)}-anchor]`;
        jump(section);
        location.hash = '';
    }
};

document.addEventListener('scroll', () => {
    if (!navigation.classList.contains('header__navigation--white') && window.pageYOffset > 0) {
        navigation.classList.add('header__navigation--white');
    }

    if (window.pageYOffset === 0) {
        navigation.classList.remove('header__navigation--white');
    }
});

window.addEventListener('load', cameFromAnotherPageWithHash);

[...jumpLinks].forEach(node => {
    node.addEventListener('click', scrollToNode);
});

import './i18n';
import './mobileNav';
import './cookies';
