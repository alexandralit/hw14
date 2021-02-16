import App from './components/app.js';
import getAPI from './components/api.js';
import Header from './components/header.js';
import Nav from './components/nav.js';
import {catalog} from './components/catalog.js';
import {contacts} from './components/contacts.js';
import {amount} from './components/amount.js';
import {cart} from './components/cart.js';
import Footer from './components/footer.js';
import './css/style.css';

if (localStorage.getItem('Products') == null) {
    getAPI().then(data => {
        localStorage.setItem('Products', JSON.stringify(data));
        catalog.init();
    }); 
} else {
    catalog.init();
}

const links = document.querySelectorAll('li');
links.forEach(link => {
    link.addEventListener('click', function() {
        switch(link.innerHTML) {
            case 'Home': 
                catalog.init();
                history.pushState("", document.title, window.location.pathname);
            break;
            case 'Contacts':
                contacts.init();
                location.hash = link.innerHTML;
            break;
            case 'Cart':
                cart.init();
                location.hash = link.innerHTML;
            break;
        }
    });
});
