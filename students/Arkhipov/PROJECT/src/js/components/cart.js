const CARTITEMS = [];

const cart = {
	containerItems: null,
	containerCounter: null,
	items: null,
	itemsCount: 0,


	init() {
		this.items = CARTITEMS;
		this.containerItems = document.querySelector('#cart-items');//nen
		this.containerCounter = document.querySelector('#cart-counter');
		this.render();
		this.containerItems.addEventListener('click', this.handleCart.bind(this));
	},

	handleCart(event) {
		if (event.target.dataset.quantity) {
			this.changeAmount(event);
		} else if (event.target.className === 'cart__btn-del') {
			this.deleteItem();
		}
	},


	changeAmount(event) {
		console.log(event.target.dataset.quantity);
		if (event.target.dataset.quantity === '+') {
			this.itemsCount += 1;
			console.log('1');
		} else if (this.itemsCount > 0) {
			this.itemsCount - 1;
		}
	},

	deleteItem() {

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
				<div> 
					<span data-quantity="-">-</span>
					<span>${amount}</span>
					<span data-quantity="+">+</span>
				</div>

          </div>
        </div>
        <div class="cart__btn-del">
        X
        </div>
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

	countAmount() {
		this.itemsCount = this.items.reduce((acc, item) => {
			acc += item.amount;
			return acc;
		}, 0);
	},

	render() {
		let result = '';

		this.items.forEach(item => {
			result += this.createItem(item);
		});

		this.containerItems.innerHTML = result;
		this.countAmount();
		this.containerCounter.innerHTML = `(${this.itemsCount})`;
	},
};

cart.init();
