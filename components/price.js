export function orderPrice() {
    let arrPrice = document.querySelectorAll('.products_in_cart div:last-child p span'),
        price = document.querySelector('.price'),
        sum = 0;
    
    arrPrice.forEach(item => {
        sum += parseFloat(item.innerHTML);
    }); 

    price.innerHTML = `<p>Order Summary: $ ${Math.floor(sum * 100) / 100}</p>
                <button class="order">Order</button>`;
}