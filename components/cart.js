import {setCookie, getCookie} from './cookie.js';
import {amount} from './amount.js';
import {orderPrice} from './price.js';

class Cart {
    create() {
        const app = document.querySelector('.app');

        const cart = document.createElement('div');
        cart.classList.add('container');
        cart.classList.add('cart');

        const data = JSON.parse(localStorage.getItem('Products'));
        
        const cookieProducts = getCookie('ProductsCart') || [];

        if (cookieProducts.length == 0) cart.innerHTML = '<div><h2>The cart is empty</h2><div>';
        else cart.innerHTML = '<div><h2>Cart</h2><div>';

        cookieProducts.forEach(item => {
            data.forEach(product => {
                if (product.id == item.index + 1) {
                    cart.insertAdjacentHTML('beforeend', `
                        <div class="products_in_cart">
                            <div>
                                <img src="${product.image}" alt="${product.category}">
                                <h2>${product.title}</h2>
                                <p>$<span>${product.price}</span></p>
                                <i class="fa fa-times-circle"></i>
                            </div>
                            <div>
                                <i class="fa fa-plus"></i>
                                <p>${item.count}</p>
                                <i class="fa fa-minus"></i>
                            </div>
                            <div>
                                <p>$ <span>${Math.floor(product.price * item.count * 100) / 100}</span></p>
                            </div>
                        </div>`);
                }
            });
        });

        app.insertBefore(cart, document.querySelector('footer'));

        const price = document.createElement('div');
        price.classList.add('price');
        cart.appendChild(price);

        orderPrice();
        amount();

        document.querySelector('.order').addEventListener('click', () => {
            if (cookieProducts.length != 0) {
                cart.innerHTML = '<div><h2>Your order is being processed</h2><div>';
                setCookie('ProductsCart', []);
                amount();
            }
        });
        
        const iconeDel = document.querySelectorAll('.fa-times-circle');
        iconeDel.forEach((icone, index) => {
            icone.addEventListener('click', () => {
                for (let i = 0; i < cookieProducts.length; i++) {
                    if (index === i) cookieProducts.splice(i, 1);
                }
                setCookie('ProductsCart', cookieProducts);
                icone.parentNode.parentNode.remove();
                amount();
                orderPrice();
            });
        });

        const counts = document.querySelectorAll('.products_in_cart div:nth-child(2)');
        counts.forEach((count, index) => {
            let minus = count.querySelector(".fa-minus"),
                p = count.querySelector("p"),
                num = count.querySelector("p").innerText,
                plus = count.querySelector(".fa-plus"),
                productPrice = count.parentNode.querySelector('.products_in_cart div:first-child p span').innerText,
                product = count.parentNode.querySelector('.products_in_cart div:last-child p span');

            plus.addEventListener("click", function() {
                num++;
                p.innerHTML = num;
                product.innerHTML = Math.floor(productPrice * num * 100) / 100;

                cookieProducts.forEach((item, i) => {
                    if (i == index) item.count = num;
                });        
                setCookie('ProductsCart', cookieProducts);   
                
                amount();
                orderPrice();
            });
            
            minus.addEventListener("click", function() {
                if (num > 1) {
                    num--;
                    p.innerHTML = num;
                    product.innerHTML = Math.floor(productPrice * num * 100) / 100;

                    cookieProducts.forEach((item, i) => {
                        if (i == index) item.count = num;
                    });        
                    setCookie('ProductsCart', cookieProducts); 
                    
                    amount();
                    orderPrice();
                }
            });
        });   
    }
    init() {
        if (document.querySelector('.container')) document.querySelector('.container').remove();
        if (document.querySelector('.amount')) document.querySelector('.amount').remove();
        
        this.create();
    }
}

const cart = new Cart();
export {cart};