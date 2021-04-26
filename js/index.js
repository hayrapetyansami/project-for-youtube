window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#mobileMenuBtn');
    const menu = document.querySelector('#menu');
    const scrl = document.querySelector('#scroll');
    const main = document.querySelector('main');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active_nav');
    });

    scrl.addEventListener('click', () => {
        main.scrollIntoView({block: "start", behavior: "smooth"});
    })
});