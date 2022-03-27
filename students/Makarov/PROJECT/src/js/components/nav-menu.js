const MENU_DATA = [
    {
        text: 'Home',
        link: 'index.html',
        items: [
            {
                text: 'Categories',
                link: 'categories.html',
            },
            {
                text: 'Product',
                link: 'product.html',
            },
            {
                text: 'Cart',
                link: 'cart.html',
            },
            {
                text: 'Check out',
                link: 'checkout.html',
            },
            {
                text: 'Contact',
                link: 'contact.html',
            },
        ]
    },
    {
        text: 'Categories',
        link: 'categories.html',
        items: [
            {
                text: 'Category',
                link: 'categories.html',
            },
            {
                text: 'Category',
                link: 'categories.html',
            },
            {
                text: 'Category',
                link: 'categories.html',
            },
            {
                text: 'Category',
                link: 'categories.html',
            },
            {
                text: 'Category',
                link: 'categories.html',
            },
        ]
    },
    {
        text: 'Accessories',
        link: '#',
    },
    {
        text: 'Offers',
        link: '#',
    },
    {
        text: 'Contact',
        link: 'contact.html'
    }
];

const navMenu = {
    menuData : [],
    container: null,

    init() {
        this.menuData = MENU_DATA;
        this.container = document.querySelector('#main_nav');
        this.render();
    },

    createItem(item) {
        const { text, link, items } = item;
        const hasSubMenu = !!item.items?.length || false;
        if (!hasSubMenu) {
            return `<li><a href="${ link }">${ text }</a></li>`;
        } else {
            return `
                <li class='hassubs'>
                    <a href="${ link }">${ text }</a>
                    ${this.createSubMenu(items)}
                </li>
            `;
        }
    },

    createSubMenu(items) {
        const subMenuContent = items.reduce((accum, current) => {
            accum += `<li><a href="${current.link}">${current.text}</a></li>`
            return accum;
        }, '');
        return `<ul>${subMenuContent}</ul>`;
    },

    render() {
        const result = this.menuData.reduce((accum, current) => {
            accum += this.createItem(current);
            return accum;
        },'');
        console.log(result);

        this.container.innerHTML = `<ul>${result}</ul>`

    }
}

navMenu.init();
