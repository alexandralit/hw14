class Contacts {
    create() {
        const app = document.querySelector('.app');
        
        const contacts = document.createElement('div');
        contacts.classList.add('container');
        contacts.classList.add('container-contacts');
        
        contacts.insertAdjacentHTML('beforeend', `
            <div class="contacts">
                <h2>Contacts</h2>
                <p>Morbi sapien turpis, commodo vel facilisis a, feugiat sed ipsum. Maecenas sapien ligula, molestie id dapibus sit amet, tincidunt at erat. Vestibulum faucibus, sem nec sollicitudin gravida, nulla mauris ultricies nibh, et pulvinar eros metus sed ligula. Nulla eu nibh orci. Maecenas nec ultricies erat. Integer magna magna, finibus sit amet sem vel, vestibulum posuere eros. Sed metus enim, auctor vitae lacus non, congue vehicula est. Quisque egestas ipsum vel dolor ultrices, non bibendum erat tempor. In ac ornare tellus. Praesent ac fermentum magna, sit amet venenatis diam. Cras ac magna purus. Nullam ac erat quis lacus venenatis bibendum eget in risus. Ut id rhoncus dui, at sollicitudin erat. Aliquam erat volutpat. Aenean vehicula finibus risus, eget tincidunt eros egestas in. Donec eleifend pharetra tortor et hendrerit.</p>
                <p>Sed lectus velit, mattis in felis sollicitudin, egestas consequat neque. Cras nec quam et lacus faucibus dignissim non vel tellus. Nam arcu justo, scelerisque ac pretium at, lacinia at velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vestibulum nunc tellus. Donec rutrum libero sit amet lacinia scelerisque. Nunc tristique consectetur lectus, at vulputate arcu facilisis id.</p>
            </div>
        `);
        app.insertBefore(contacts, document.querySelector('footer'));
    }
    
    init() {
        if (document.querySelector('.container')) document.querySelector('.container').remove();

        this.create();
    }
}

const contacts = new Contacts();
export {contacts};
