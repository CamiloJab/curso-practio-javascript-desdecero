const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isDesktopMenuClosed = shoppingCartContainer.classList.toggle('inactive');

    if(!isDesktopMenuClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.toggle('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }

    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.toggle('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }
    
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'console',
    price: 1000,
    image: 'https://topesdegama.com/app/uploads-topesdegama.com/2022/08/Switch.jpg',
});
productList.push({
    name: 'TV',
    price: 500,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/16228089/Televisor-XIAOMI-43-Pulgadas-Uhd-4K-Smart-Tv-Televisor-Xiaomi-43-P1-4K-UHD-LED-3220004_c.jpg?v=638089789301370000',
});
productList.push({
    name: 'teclado',
    price: 100,
    image: 'https://compucentro.co/wp-content/uploads/TECLADO-GAMER-TRUST-AZOR.jpeg',
});
productList.push({
    name: 'lamparaGamer',
    price: 80,
    image: 'https://falabella.scene7.com/is/image/Falabella/gsc_110733106_260181_2?wid=800&hei=800&qlt=70',
});
productList.push({
    name: 'alexa',
    price: 220,
    image: 'https://panamericana.vtexassets.com/arquivos/ids/386980/altavoz-inteligente-echo-dot-blanco-alexa-1-840080590431.jpg?v=637515990392770000',
});
productList.push({
    name: 'mouseGamer',
    price: 320,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/325193/Mouse-Gamer-Trust-Gxt-101-Alambrico-USB.jpg?v=637004842350200000',
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
function renderProducts(arr){
    for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product ={name, price, image} --> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './curso-frontend-developer-javascriptpractico/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);