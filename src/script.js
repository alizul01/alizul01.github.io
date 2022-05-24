window.onscroll = function() {
    const nav = document.querySelector('nav');
    const fixedNav = nav.offsetTop;

    if (window.pageYOffset > fixedNav) {
        nav.classList.add('navbar-fix');
    } else {
        nav.classList.remove('navbar-fix');
    }
}

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    navmenu.classList.toggle('hidden');
});