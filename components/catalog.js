import {amount} from './amount.js';
import {addProductCookie} from './addCookie.js';

class Catalog {
    create() {
        const app = document.querySelector('.app');
        
        const catalog = document.createElement('div');
        catalog.classList.add('container');
        catalog.classList.add('catalog');

        const data = JSON.parse(localStorage.getItem('Products'));
        
        data.forEach(product => { 
            catalog.insertAdjacentHTML('beforeend', `
                <div class="product">
                    <h2>${product.title}</h2>
                    <p>${product.category}</p>
                    <img src="${product.image}" alt="${product.category}">
                    <p>$ ${product.price}</p>
                    <div>
                        <button class="add">Add to cart</button>
                        <button class="view">View <i class="fa fa-eye"></i></button>
                    </div>
                </div>
            `);
        });

        amount();
        
        app.insertBefore(catalog, document.querySelector('footer'));
        
        const viewProducts = document.querySelectorAll('.view');

        const viewItem = document.createElement('div');
        viewItem.classList.add('container');

        viewProducts.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (document.querySelector('.container')) document.querySelector('.container').remove();
                location.hash = `product/${index + 1}`;

                data.forEach(product => { 
                    if (index + 1 == product.id) {
                        viewItem.insertAdjacentHTML('beforeend', `
                            <div class="product_item">
                                <h2>${product.title}</h2>
                                <p>${product.category}</p>
                                <img src="${product.image}" alt="${product.category}">
                                <p>${product.description}</p>
                                <p>$ ${product.price}</p>
                                <button class="add">Add to cart</button>
                            </div>`);
                    }
                });

                app.insertBefore(viewItem, document.querySelector('footer'));
            
                const buttonAdd = document.querySelector('.add');
                const product = {index: index, count: 0};
                buttonAdd.addEventListener('click', function() {
                    addProductCookie(product);
                });

            });
        });

        const buttonsAdd = document.querySelectorAll('.add');
        buttonsAdd.forEach((item, index) => {
            const product = {index: index, count: 0};
            item.addEventListener('click', function() {
                addProductCookie(product);
            });
        });
    }
    init() {
        if (document.querySelector('.container')) document.querySelector('.container').remove();
        
        this.create();
    }
}

const catalog = new Catalog();
export {catalog};
