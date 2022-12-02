

/* Variables */
const $navbarEmail = document.querySelector('.navbar-email'),
$desktopMenu = document.querySelector('.desktop-menu'),
$iconoHamburguer = document.querySelector('.menu'),
$mobileMenu = document.querySelector('.mobile-menu')

/* funciones */
function hamToggle () {
    $mobileMenu.classList.toggle('active');
};

function navbarEmailToggle () {
    $desktopMenu.classList.toggle('active');
};

function navbarEmail () {
    $navbarEmail.addEventListener('click', navbarEmailToggle );
};

function hamburguerMenu () {
    $iconoHamburguer.addEventListener('click', hamToggle);
};

/* llamados */
navbarEmail();

hamburguerMenu();