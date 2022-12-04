
const d = document;
/* variables DOM */
const $mailMenu = d.querySelector('.navbar-email'),
$desktopMenuEmail = d.querySelector('.desktop-menu'),
$arrayBottom = d.querySelector('.array-bottom'),
$menuBurger = d.querySelector('.menu'),
$menuMobile = d.querySelector('.mobile-menu'),
$Carrito = d.querySelector('.navbar-shopping-cart'),
$productosDetalles = d.querySelector('.product-detail'),
$body = d.querySelector('body'),
$cardsConteiner = d.querySelector('.cards-conteiner');

/* variables */
let productList = [];

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

function productosHtml (array) {
    for (product of array) {

        const $productCards = d.createElement('div');
        const $img = d.createElement('img');
        const $productInfoConteiner = d.createElement('div');
        const $productInfoDiv = d.createElement('div');
        const $producPrecio = d.createElement('p');
        const $producNombre = d.createElement('p');
        const $procuctFigure = d.createElement('figure');
        const $figureImg = d.createElement('img');
        const imgCarrito = './img/carrito-de-compras.png';

        $productCards.classList.add('product-card');
        $productInfoConteiner.classList.add('product-info');

        $img.setAttribute('src', product.image);
        $figureImg.setAttribute('src', imgCarrito);

        $producPrecio.innerText = '$' + product.price;
        $producNombre.innerText = product.name;


        $procuctFigure.appendChild($figureImg),
        $productInfoDiv.appendChild($producNombre);
        $productInfoDiv.appendChild($producPrecio);
        $productInfoConteiner.appendChild($productInfoDiv);
        $productCards.appendChild($img);
        $productCards.appendChild($productInfoConteiner);
        $cardsConteiner.appendChild($productCards);

    };
};

productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});
productList.push({
    name: 'Tv',
    price: 850,
    image: './img/led-tv.jpg'
});




/* llamados */

buttonEmail();
buttonHamBurguer();
iconButtonCarrito();
productosHtml(productList);