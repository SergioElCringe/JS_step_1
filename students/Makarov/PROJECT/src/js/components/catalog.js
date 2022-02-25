const IMG_LINK_TEMPLATE = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products/';
const CATALOG_DATA = [
    {
        imgFileName: 'product_1.jpg',
        sticker: '1',
        link: 'categories.html',
        title: 'Smart Phone 1',
        price: 100,
    },
    {
        imgFileName: 'product_2.jpg',
        sticker: '2',
        link: 'categories.html',
        title: 'Smart Phone 2',
        price: 200,
    },
    {
        imgFileName: 'product_3.jpg',
        sticker: null,
        link: 'categories.html',
        title: 'Smart Phone 3',
        price: 300,
    },
    {
        imgFileName: 'product_4.jpg',
        sticker: null,
        link: 'categories.html',
        title: 'Smart Phone 4',
        price: 400,
    },
    {
        imgFileName: 'product_5.jpg',
        sticker: null,
        link: 'categories.html',
        title: 'Smart Phone 5',
        price: 500,
    },
    {
        imgFileName: 'product_6.jpg',
        sticker: '3',
        link: 'categories.html',
        title: 'Smart Phone 6',
        price: 600,
    },
    {
        imgFileName: 'product_7.jpg',
        sticker: null,
        link: 'categories.html',
        title: 'Smart Phone 7',
        price: 700,
    },
    {
        imgFileName: 'product_8.jpg',
        sticker: '2',
        link: 'categories.html',
        title: 'Smart Phone 8',
        price: 800,
    },
];
const STICKER_TYPES = {
    1: 'New',
    2: 'Sale',
    3: 'Hot'
}
const catalog = {
    container: null,
    stickerTypes: {},
    catalogData: [],
    imgLinkTemplate: null, 
    init() {
        this.container = document.querySelector('#catalog');
        this.stickerTypes = STICKER_TYPES;
        this.catalogData = CATALOG_DATA;
        this.imgLinkTemplate = IMG_LINK_TEMPLATE;
        this.render();
    },

    render() {
        this.container.innerHTML = this.catalogData.reduce((accum, current) => accum += this.createProductBlock(current), '');
    },

    createProductBlock(item) {
        const {imgFileName, sticker, link, title, price} = item;
        const stickerEl = sticker ? `<div class="product_extra product_${this.stickerTypes[sticker]}"><a href="${link}">${this.stickerTypes[sticker]}</a></div>` : '';
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
            </div>
        `;
    }
};

catalog.init();