class Footer {
    create() {
        const app = document.querySelector('.app');

        const footer = document.createElement('footer');
        footer.insertAdjacentHTML('beforeend', `
            <div class="container-footer">
                <div class="logo">
                    <a href="#"><i class="fa fa-shopping-bag"></i></a>
                </div>
                <div class="footer-contacts">
                    <p><i class="fa fa-map"></i><span> 59 Street, Rose Town, 05 Rive House</span></p>
                    <p><i class="fa fa-phone"></i><span> +123 345 67890</span></p>
                    <p><i class="fa fa-envelope-open"></i><span> info@gmail.com</span></p>
                </div>
            </div>`);
        app.appendChild(footer);
    }

    init() {
        this.create();
    }
}

export default new Footer().init();