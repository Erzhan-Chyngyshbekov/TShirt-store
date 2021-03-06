/*!
* Start Bootstrap - Shop Homepage v4.3.0 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const database = {
    products: [
        {
            id: 1,
            title: 'T-shirt 1',
            image: 'http://static1.squarespace.com/static/5a7ecc75f9a61ec7900fe047/5b71738f70a6ad48d1b1aa2c/5d5a9073c3c08400016d0e49/1568197718185/T-Shirt+Mock-Up+Back+Green.jpg',
            price: 15,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        },
        {
            id: 2,
            title: 'T-shirt 2',
            image: 'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1000,w_1107/https%3A%2F%2Fmlsmultiplex.com%2Ffiles%2F2020%2F11%2FTimSays_TimeMelia_MLSPA_BreakingT_shirt_2048x2048.jpg',
            price: 10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        },
        {
            id: 3,
            title: 'T-shirt 3',
            image: 'https://aliradar.com/api/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH0076597bf1e2459e8c6462d4100562dbE%2FFIXSYS-T-shirt-Summer-Women-Tops-Tee-Graphic-Tee-Shirts-Aesthetic-90s-Fashion-T-Shirts-Funny.jpg_480x480.jpg_Q80.jpg',
            price: 8,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        },
        {
            id: 4,
            title: 'T-shirt 4',
            price: 15,
            image: 'http://cdn.shopify.com/s/files/1/0362/7391/3988/collections/Merchandise-TKMaxx-Tshirt-Kids-BuzzLightyear-web_1200x1200.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        },
        {
            id: 5,
            title: 'T-shirt 5',
            price: 15,
            image: 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3638162/face-this-jon-burgerman.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
        }
    ]
}


database.products.map((product)=>{
    $('.products').append(`<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
        <a href="#!"><img class="card-img-top" src="${product.image}" alt="..." /></a>
        <div class="card-body">
            <h4 class="card-title"><a href="#!">${product.title}</a></h4>
            <h5>${product.price}</h5>
            <p class="card-text">${product.description}</p>
        </div>
        <div class="card-footer"><small class="text-muted">
            <button id="saveToCartBtn" class="btn btn-success">
                <img src="./assets/icons/cart.png" alt="cart-icon">
            </button>
        </small></div>

    </div>
</div>`)
})