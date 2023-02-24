const menuEmail = document.querySelector('.navbar-email')
const iconMenu = document.querySelector('.menu');
const menuIconCar = document.querySelector('.navbar-shopping-cart');
const productDetailClose = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const productDetail = document.querySelector('.view-product-detail')
const cardsContainer =document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuIconCar.addEventListener('click', toggleCarAside);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu(){
    aside.classList.add('inactive');
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    
}

function toggleMobileMenu(){
    aside.classList.add('inactive');
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    aside.classList.toggle('inactive');
}

function openProductDetail(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}


const productlist = [];
productlist.push({
    name:'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productlist.push({
    name:'Laptop',
    price:180,
    image: 'https://www.tecnopiso.mx/admin/img/colores/originalx5/904907_60x60_brookline_pieza.jpg',
});
productlist.push({
    name:'Bici',
    price:150,
    image: 'https://www.tecnopiso.mx/admin/img/colores/originalx5/288fca_amonto@1.jpg',
});

//catalogo
function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const producInfoFigure = document.createElement('figure');
    
        const producImgCart = document.createElement('img');
        producImgCart.setAttribute('src', './icons/Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
        producInfoFigure.appendChild(producImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(producInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productlist);