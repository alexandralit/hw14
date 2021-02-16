import {setCookie, getCookie} from './cookie.js';
import {amount} from './amount.js';

export function addProductCookie(product) {
    product.count += 1;

    const cookieProducts = getCookie('ProductsCart');

    if (cookieProducts !== undefined) {
        for (let i = 0; i < cookieProducts.length; i++) {
            if (cookieProducts[i].index == product.index) {
                cookieProducts.splice(i, 1);
            }
        }
        cookieProducts.push(product);
    } 

    setCookie('ProductsCart', cookieProducts || [product]);
    amount();
}