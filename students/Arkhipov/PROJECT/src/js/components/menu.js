const menuData = [
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
				text: 'Contact',
				link: './contact.html',
			},
		],
	},
	{
		text: 'Categories',
		link: './categories.html',
		items: [
			{
				text: 'Category',
				link: '.#',
			},
			{
				text: 'Category',
				link: '.#',
			},
			{
				text: 'Category',
				link: '.#',
			},
			{
				text: 'Category',
				link: '.#',
			},
			{
				text: 'Category',
				link: '.#',
			},
		],
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
		link: './contact.html',
	},
];

const menu = {
	items: [],
	container: null,

	init() {
		this.container = document.querySelector('#menu-nav');
		this.items = menuData;
		this.render();
	},

	render() {
		this.container.innerHTML = this.createTemplate(this.items);
	},

	createTemplate(items) {
		let result = '<ul>';
		items.forEach(item => {
			result += this.createItem(item);
		});
		result += '</ul>';
		return result;
	},

	createItem(item) {
		const subMenu = !!item.items?.length || false; // это решение честно подсмотрел(хотя про него знал). Проерка наличия массива, существует ли он вообще или нет? (?)не будет давать ошибку, а просто undefined(false)
		const { link, text } = item;
		let result = '';
		if (!subMenu) {
			result += `<li><a href="${link}">${text}</a></li>`;
		} else {
			result += `
        <li class="hassubs">
          <a href="${link}">${text}</a>
          ${this.createTemplate(item.items)}
        </li>
      `;
		};
		return result;
	},
}

menu.init();
