const productsApi = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products';

const products = [{
        imgUrl: '/product_1.jpg',
        name: 'Smapt Phone',
        condition: 1,
        price: '$670'
    },
    {
        imgUrl: '/product_2.jpg',
        name: 'Smapt Phone',
        condition: 2,
        price: '$670'
    },
    {
        imgUrl: '/product_3.jpg',
        name: 'Smapt Phone',
        condition: 3,
        price: '$670'
    },
    {
        imgUrl: '/product_4.jpg',
        name: 'Smapt Phone',
        condition: null,
        price: '$670'
    },
    {
        imgUrl: '/product_5.jpg',
        name: 'Smapt Phone',
        condition: null,
        price: '$670'
    },
    {
        imgUrl: '/product_6.jpg',
        name: 'Smapt Phone',
        condition: 3,
        price: '$670'
    },
    {
        imgUrl: '/product_7.jpg',
        name: 'Smapt Phone',
        condition: 2,
        price: '$670'
    },
    {
        imgUrl: '/product_8.jpg',
        name: 'Smapt Phone',
        condition: 1,
        price: '$670'
    },
];

const ENUMS = {
    condition: {
        1: 'new',
        2: 'hot',
        3: 'sale'
    },
};

const app = {
    container: null,
    items: [],

    init() {
        this.items = products;
        this.container = document.querySelector('#catalog');
        this.render();
    },

    getTemplate(item) {
        const { name, price, imgUrl, condition } = item;
        return `
        <div class="product">
            <div class="product_image">
                <img src="${productsApi + imgUrl}" alt="">
            </div>
            ${this.getProductExtraTemplate(condition)}
            <div class="product_content">
                <div class="product_title">
                    <a href="product.html">${name}</a>
                </div>
                <div class="product_price">${price}</div>
            </div>
        </div>`;
    },

    getProductExtraTemplate(conditionId) {
        const condition = conditionId ? this.getCondition(conditionId) : null;
        return condition ? `
        <div class="product_extra ${condition.className}">
            <a href="categories.html">${condition.text}</a>
        </div>
        ` : '';
    },

    getCondition(conditionId) {
        let className, text;

        switch (conditionId) {
            case 1:
                {
                    className = 'product_new';
                    text = 'New';
                    break;
                };

            case 2:
                {
                    className = 'product_hot';
                    text = 'Hot';
                    break;
                };

            default:
                {
                    className = 'product_sale';
                    text = 'Sale';
                };
        };

        return { className, text };
    },

    render() {
        let accum = '';
        this.items.forEach(item => accum += this.getTemplate(item));
        this.container.innerHTML = accum;
    },
};

app.init();