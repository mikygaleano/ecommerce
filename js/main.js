
const d = document;
/* variables DOM */
const $mailMenu = d.querySelector('.navbar-email'),
$desktopMenuEmail = d.querySelector('.desktop-menu'),
$arrayBottom = d.querySelector('.array-bottom'),
$menuBurger = d.querySelector('.menu'),
$menuMobile = d.querySelector('.mobile-menu'),
$Carrito = d.querySelector('.navbar-shopping-cart'),
$productosDetalles = d.querySelector('.product-detail'),
$body = d.querySelector('body')



/* funciones */
function menuEmailOpen () {
    $desktopMenuEmail.classList.toggle('toggle-top');
    if ($desktopMenuEmail.classList.contains('toggle-top')) {
        $productosDetalles.classList.remove('active')
    }
};

function menuHamBurger () {
    $menuMobile.classList.toggle('hamOpen')
    if ($menuMobile.classList.contains('hamOpen')) {
        $productosDetalles.classList.remove('active')
    }
};

function carritoMenu () {
    $productosDetalles.classList.toggle('active')
    if ($productosDetalles.classList.contains('active')) {
        $desktopMenuEmail.classList.remove('toggle-top');
        $menuMobile.classList.remove('hamOpen')
    }
};


function buttonEmail () {
    $mailMenu.addEventListener('click', menuEmailOpen);
    $arrayBottom.addEventListener('click', menuEmailOpen);
};

function buttonHamBurguer () {
    $menuBurger.addEventListener('click', menuHamBurger);
};

function iconButtonCarrito () {
    $Carrito.addEventListener('click', carritoMenu);
};

/* llamados */

buttonEmail();
buttonHamBurguer();
iconButtonCarrito();