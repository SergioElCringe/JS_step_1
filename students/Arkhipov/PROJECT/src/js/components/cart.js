const CARTITEMS = [];

const cart = {
	containerItems: null,
	containerCounter: null,
	items: null,
	itemsCount: 0,
	total: null,

	init() {
		this.items = CARTITEMS;
		this.containerItems = document.querySelector('#cart-items');
		this.containerCounter = document.querySelector('#cart-counter');
		this.containerItems.addEventListener('click', this.handleCart.bind(this));
		this.render();
	},

	handleCart(event) {
		if (event.target.dataset.quantity) {
			this.changeAmount(event);
		} else if (event.target.className === 'cart__btn-del') {
			this.deleteItem(event);
		}
	},

	changeAmount(event) {
		const idElem = event.target.parentElement.parentElement.parentElement.parentElement.id;//ужас !!!!! Оч плохое решение
		if (event.target.dataset.quantity === '+') {
			this.items.forEach(item => {
				if (idElem === item.id) {
					item.amount++
					this.render();
				}
			})
		} else if (event.target.dataset.quantity === '-') {
			this.items.forEach(item => {
				if (idElem === item.id) {
					item.amount > 1 ? item.amount-- : 1
					this.render();
				}
			})
		}
	},

	deleteItem(event) {
		const idElem = event.target.parentElement.id;// не такой сильно стрёмный ужас
		const find = this.items.find(item => item.id === idElem);
		let index = this.items.indexOf(find);
		this.items.splice(index, 1);
		this.render();
	},

	createItem(item) {
		const { imgUrl, name, price, amount, id } = item;
		return `
    <div class="cart__item" id="${id}">
        <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
        <div class="cart__item__info">
          <span>${name}</span>
          <div class="price__block">
            <span>$${price}</span>
				<div class="quantity" > 
					<span data-quantity="-">-</span>
					<span>${amount}</span>
					<span data-quantity="+">+</span>
				</div>
          </div>
        </div>
				<div>
				$${price * amount}
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

	totalSumm() {
		this.total = 0;
		this.items.forEach(item => {
			this.total += item.price * item.amount;
		})
		return `<div class='cart__total'>Total summ: $${this.total}</div>`;
	},

	render() {
		let result = '';
		this.items.forEach(item => {
			result += this.createItem(item);
		});
		result += this.totalSumm();
		this.containerItems.innerHTML = result;
		this.countAmount();
		this.containerCounter.innerHTML = `(${this.itemsCount})`;
	},

};

cart.init();
