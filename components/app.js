class App {
    constructor() {
        this.element;
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('app');
    }

    render() {
        document.body.appendChild(this.element);
    }
    
    init() {
        document.querySelector('html').setAttribute('lang', 'en');

        const head = document.querySelector('head');

        const meta = document.createElement('meta');
        meta.setAttribute('charset', 'UTF-8');
        head.appendChild(meta);

        const metaContent = document.createElement('meta');
        metaContent.setAttribute('name', 'author');
        metaContent.setAttribute('content', 'AL');
        head.appendChild(metaContent);

        const title = document.createElement('title');
        title.innerHTML = 'hw14';
        head.appendChild(title);

        const linkFontawesome = document.createElement('link');
        linkFontawesome.setAttribute('rel', 'stylesheet');
        linkFontawesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
        head.appendChild(linkFontawesome);

        const linkFont = document.createElement('link');
        linkFont.setAttribute('rel', 'stylesheet');
        linkFont.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
        head.appendChild(linkFont);

        this.create();
        this.render();
    }
}

export default new App().init();