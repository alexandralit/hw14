class Nav {
    create() {
        const nav = [{name: 'Home'}, 
                     {name: 'Contacts'}, 
                     {name: 'Cart'}];

        const ul = document.createElement('ul');
        document.querySelector('.container-header').appendChild(ul);

        nav.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = link.name;
            ul.appendChild(li);
        });
    }
    
    init() {
       this.create();
    }
}

export default new Nav().init();