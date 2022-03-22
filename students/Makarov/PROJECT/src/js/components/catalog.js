const CATALOG_DATA = [
    {
        imgFileName: 'product_1.jpg',
        sticker: '1',
        link: 'categories.html',
        title: 'Smart Phone 1',
        price: 100,
        id: 1
    },
    {
        imgFileName: 'product_2.jpg',
        sticker: '2',
        link: 'categories.html',
        title: 'Smart Phone 2',
        price: 200,
        id: 2
    },
    {
        imgFileName: 'product_3.jpg',
        sticker: null,
        link: 'categories.html',
        title: 'Smart Phone 3',
        price: 300,
        id: 3
    },
    {
        imgFileName: 'product_4.jpg',
        sticker: null,
        link: 'categories.html',
        title: 'Smart Phone 4',
        price: 400,
        id: 4
    },
    {
        imgFileName: 'product_5.jpg',
        sticker: null,
        link: 'categories.html',
        title: 'Smart Phone 5',
        price: 500,
        id: 5
    },
    {
        imgFileName: 'product_6.jpg',
        sticker: '3',
        link: 'categories.html',
        title: 'Smart Phone 6',
        price: 600,
        id: 6
    },
    {
        imgFileName: 'product_7.jpg',
        sticker: null,
        link: 'categories.html',
        title: 'Smart Phone 7',
        price: 700,
        id: 7
    },
    {
        imgFileName: 'product_8.jpg',
        sticker: '2',
        link: 'categories.html',
        title: 'Smart Phone 8',
        price: 800,
        id: 8
    },
];
const STICKER_TYPES = {
    1: 'new',
    2: 'sale',
    3: 'hot'
}
const catalog = {
    container: null,
    stickerTypes: {},
    catalogData: [],
    imgLinkTemplate: null,
    cart: null,

    init() {
        this.cart = cart;
        this.container = document.querySelector('#catalog');
        this.stickerTypes = STICKER_TYPES;
        this.catalogData = CATALOG_DATA;
        this.imgLinkTemplate = IMG_LINK_TEMPLATE;
        this.render();
        this.handleEvents();
    },

    handleEvents() {
        this.container.addEventListener('click', e => {
            if(e.target.classList.contains('button_add')){
                const { title, price, imgfilename, id } = e.target.dataset;
                this.cart.addItem({title, price, id, imgFileName: imgfilename});
            }
        });
    },

    render() {
        this.container.innerHTML = this.catalogData.reduce((accum, current) => accum += this.createProductBlock(current), '');
    },

    createProductBlock(item) {
        const { imgFileName, sticker, link, title, price, id } = item;
        const stickerEl = sticker ? `<div class="product_extra product_${this.stickerTypes[sticker]}"><a href="${link}">${this.stickerTypes[sticker].charAt(0).toUpperCase() + this.stickerTypes[sticker].slice(1)}</a></div>` : '';
        return `
            <div class="product">
                <div class="product_image">
                    <img src="${this.imgLinkTemplate + imgFileName}">
                </div>
                ${stickerEl}
                <div class="product_content">
                    <div class="product_title"><a href="${link}">${title}</a></div>
                    <div class="product_price">$${price}</div>
                </div>
                <button 
                    class='button_add'
                    data-imgfilename="${imgFileName}"
                    data-title="${title}"
                    data-price="${price}"
                    data-id="${id}"
                >
                    Add
                </button>
            </div>

        `;
    }
};

catalog.init();