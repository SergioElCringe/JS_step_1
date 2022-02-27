const MENU = [
  {
    text: 'Home',
    link: './index.html',
    items: [
      {
        text: 'Categories',
        link: './categories.html',
      },
      {
        text: 'Product',
        link: './product.html',
      },
      {
        text: 'Cart',
        link: './cart.html',
      },
      {
        text: 'Check out',
        link: './checkout.html',
      },
      {
        text: 'Contact us',
        link: './contact.html',
      },
    ]
  },
  {
    text: 'Categories',
    link: './categories.html',
    items: [
      {
        text: 'Категория 1',
        link: '.#',
      },
    ],
  },
  {
    text: 'Contacts',
    link: './contact.html',
  },
];

const topNav = {
  container: null,
  items: null,

  init() {
    this.items = MENU;
    this.container = document.querySelector('#main_nav');
    this.render();
  },

  createItem(item) {
    const sub = !!item.items?.length || false;
    const { link, text } = item;
    // const sub2 = item.items && item.items.length ? true : false;
    let result = '';
    if (!sub) {
      result += `<li><a href="${ link }">${ text }</a></li>`;
    } else {

      result += `
        <li  class="hassubs">
          <a href="${ link }">${ text }</a>
          ${ this.createMenu(item.items) }
        </li>
      `;
    };
    return result;
  },

  render() {
    this.container.innerHTML = this.createMenu(this.items);
  },

  createMenu(items) {
    let res = '<ul>';
    items.forEach(item => {
      res += this.createItem(item);
    });
    res += '</ul>';

    return res;
  },
};

topNav.init();
