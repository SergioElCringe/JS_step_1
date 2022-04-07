const PRODUCTS_API = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products';

const ENUMS = {
	category: {
		1: 'new',
		2: 'hot',
		3: 'sale',
	},
};

const PRODUCTS = [
	{
		imgUrl: '/product_1.jpg',
		name: 'Smart Phone',
		price: 670,
		category: 1
	},
	{
		imgUrl: '/product_2.jpg',
		name: 'Smart Phone',
		price: 670,
		category: null
	},
	{
		imgUrl: '/product_3.jpg',
		name: 'Smart Phone',
		price: 670,
		category: null
	},
	{
		imgUrl: '/product_4.jpg',
		name: 'Smart Phone',
		price: 670,
		category: 1
	},
	{
		imgUrl: '/product_5.jpg',
		name: 'Smart Phone',
		price: 670,
		category: 2
	},
	{
		imgUrl: '/product_6.jpg',
		name: 'Smart Phone',
		price: 670,
		category: null
	},
	{
		imgUrl: '/product_7.jpg',
		name: 'Smart Phone',
		price: 670,
		category: null
	},
	{
		imgUrl: '/product_8.jpg',
		name: 'Smart Phone',
		price: 670,
		category: 3
	},
];

const catalog = {
	items: [],
	container: null,

	init() {
		this.items = PRODUCTS;
		this.container = document.querySelector('#catalog');
		this.render();
	},

	createTemplate(item) {
		const { imgUrl, name, price, category } = item;
		return `
    <div class="product">
      <div class="product_image"><img src="${PRODUCTS_API + imgUrl}" alt=""></div>
      ${this.getProductExtraTemplate(category)}
      <div class="product_content">
        <div class="product_title"><a href="product.html">${name}</a></div>
        <div class="product_price">$${price}</div>
      </div>
    </div>
    `;
	},

	getProductExtraTemplate(categoryId) {
		const category = categoryId ? this.getCategory(categoryId) : null;
		return category ? `
      <div class="product_extra ${category.className}">
        <a href="categories.html">${category.text}</a>
      </div>
    ` : '';
	},

	getCategory(categoryId) {
		let className, text;

		switch (categoryId) {
			case 1: {
				className = 'product_new';
				text = 'New';
				break;
			}

			case 2: {
				className = 'product_hot';
				text = 'Hot';
				break;
			}

			default: {
				className = 'product_sale';
				text = 'Sale';
			}
		};
		return { className, text };
	},

	render() {
		let result = '';

		this.items.forEach(item => {
			result += this.createTemplate(item);
		});

		this.container.innerHTML = result;
	},
};

catalog.init();
