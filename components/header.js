class Header {
    create() {
        const app = document.querySelector('.app');

        const header = document.createElement('header');
        header.innerHTML = `
            <div class="container-header">
                <div class="logo">
                    <a href="#"><i class="fa fa-shopping-bag"></i></a>
                </div>
            </div>`;
        app.appendChild(header);        
    }
    
    init() {
        this.create();
    }
}

export default new Header().init();