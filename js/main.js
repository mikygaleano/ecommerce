
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
$cardsConteiner = d.querySelector('.cards-conteiner'),
$productDetalle = d.querySelector('.product-detalle'),
$closeIconDetalle = d.querySelector('.product-detail-close'); 

/* variables */
let productList = [],
productJuguete = [],
productMuebles = [],
productRopa = [];

const $todos = d.querySelector('.todos'),
$electronica = d.querySelector('.electronica'),
$juguetes = d.querySelector('.juguetes'),
$ropa = d.querySelector('.ropa'),
$muebles = d.querySelector('.muebles');

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
        $menuMobile.classList.remove('hamOpen');
        $productDetalle.classList.add('inactiv');
    }
};



function openDetallesDelProducto () {
    $productDetalle.classList.remove('inactiv');
    if (!$productDetalle.classList.contains('inactiv')) {
        $productosDetalles.classList.remove('active')
    }
};

function iconDetallesClose () {
    $productDetalle.classList.add('inactiv') 
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
        const imgCarrito = './img/carrito-de-compras.jpg';

        $productCards.classList.add('product-card');
        $productInfoConteiner.classList.add('product-info');

        $img.setAttribute('src', product.image);
        $figureImg.setAttribute('src', imgCarrito);
        $img.addEventListener('click', openDetallesDelProducto);
        $closeIconDetalle.addEventListener('click', iconDetallesClose);

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


$mailMenu.addEventListener('click', menuEmailOpen);
$arrayBottom.addEventListener('click', menuEmailOpen);


$menuBurger.addEventListener('click', menuHamBurger);


$Carrito.addEventListener('click', carritoMenu);


function renderProduct (dom, productos) {
    dom.addEventListener('click',function () {productosHtml(productos)})
}


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


productJuguete.push({
    name: 'cubo',
    price: 780,
    image: './img/juguete.png'
})
productJuguete.push({
    name: 'cubo',
    price: 780,
    image: './img/juguete.png'
})
productJuguete.push({
    name: 'cubo',
    price: 780,
    image: './img/juguete.png'
})
productJuguete.push({
    name: 'cubo',
    price: 780,
    image: './img/juguete.png'
})
productJuguete.push({
    name: 'cubo',
    price: 780,
    image: './img/juguete.png'
})


productMuebles.push({
    name: 'placard',
    price: 1000,
    image: './img/mueble.jpg'
});
productMuebles.push({
    name: 'placard',
    price: 1000,
    image: './img/mueble.jpg'
});
productMuebles.push({
    name: 'placard',
    price: 1000,
    image: './img/mueble.jpg'
});
productMuebles.push({
    name: 'placard',
    price: 1000,
    image: './img/mueble.jpg'
});
productMuebles.push({
    name: 'placard',
    price: 1000,
    image: './img/mueble.jpg'
});
productMuebles.push({
    name: 'placard',
    price: 1000,
    image: './img/mueble.jpg'
});
productMuebles.push({
    name: 'placard',
    price: 1000,
    image: './img/mueble.jpg'
});


productRopa.push({
    name: 'campera',
    price: 1500,
    image: './img/ropa.jpg'
});
productRopa.push({
    name: 'campera',
    price: 1500,
    image: './img/ropa.jpg'
});
productRopa.push({
    name: 'campera',
    price: 1500,
    image: './img/ropa.jpg'
});
productRopa.push({
    name: 'campera',
    price: 1500,
    image: './img/ropa.jpg'
});
productRopa.push({
    name: 'campera',
    price: 1500,
    image: './img/ropa.jpg'
});
productRopa.push({
    name: 'campera',
    price: 1500,
    image: './img/ropa.jpg'
});


/* llamados */

renderProduct($juguetes, productJuguete);
renderProduct($electronica, productList);
renderProduct($ropa, productRopa);
renderProduct($muebles, productMuebles);




