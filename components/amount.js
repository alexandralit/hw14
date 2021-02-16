import {setCookie, getCookie} from './cookie.js';

export function amount() {
    if (document.querySelector('.amount')) document.querySelector('.amount').remove();

    const cookieProducts = getCookie('ProductsCart');
    let amount = 0;

    const amountSpan = document.createElement('span');
    amountSpan.classList.add('amount');
    document.querySelector('.container-header').appendChild(amountSpan);
    amountSpan.innerHTML = amount;
        
    if (cookieProducts !== undefined) {
        cookieProducts.forEach(item => {
            amount += item.count;
            amountSpan.innerHTML = amount;
        });
    }
}
