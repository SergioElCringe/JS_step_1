const CARTITEMS = [];

const cart = {
	containerItems: null,
	containerCounter: null,
	containerPrice: null,
	items: null,
	itemsCount: 0,
	itemsPrice: 0,
	init() {
		this.items = CARTITEMS;
		this.containerItems = document.querySelector('#cart-items');
		this.containerCounter = document.querySelector('#cart-counter');
		this.containerPrice = document.querySelector('#cart-price');
		this.containerItems.addEventListener('click', this.removeItem.bind(this));
		this.render();
	},

	createItem(item) {
		const { imgUrl, name, price, amount } = item;
		return `
		<div class="cart__item">
			<img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
			<div class="cart__item__info">
				<span>${name}</span>
				<div class="price__block">
					<span>$${price}</span>
					<span>${amount}</span>
				</div>
			</div>
			<button class="remove"> x </button>
		</div>
		`;
	},

	addItem(item) {
		const { imgUrl, name, price, id } = item;
		const find = this.items.find(cartItem => cartItem.id === id);

		if (!find) {
			const newItem = { imgUrl, name, price, id };
			newItem.amount = 1;
			this.items.push(newItem);
		} else {
			find.amount++;
		}
		this.render();
	},
	removeItem(evt) {
		if (evt.target.classList.contains('remove')) {
			this.items.pop();
		}
		this.render();
	},

	countPrice() {
		this.itemsPrice = this.items.reduce((acc, item) => {
			acc += (+item.price) * item.amount;
			return acc;
		}, 0);
	},
	countAmount() {
		this.itemsCount = this.items.reduce((acc, item) => {
			acc += item.amount;
			return acc;
		}, 0);
	},
	getTotal (itemsCount, itemsPrice) {
		return `<hr>
		<div><span>Total quantity: <b>${itemsCount}</b></span><span>Total price: <b>$${itemsPrice}</b></span></div>
        <hr>
		</div>
		
		`;
	},
	render() {
		let result = '';
		this.countAmount();
		this.countPrice();
		this.items.forEach(item => {
			result += this.createItem(item);

		});
		if (result && this.items.length > 0) {
            result += this.getTotal(this.itemsCount, this.itemsPrice);
        };
		this.containerItems.innerHTML = result;
		this.containerCounter.innerHTML = `(${this.itemsCount})`;
	},
};

cart.init();