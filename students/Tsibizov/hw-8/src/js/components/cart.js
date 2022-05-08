const CARTITEMS = [];

const cart = {
    containerItems: null,
    containerCounter: null,
    containerPrice: null,
    items: null,
    prices: [],
    itemsCount: 0,
    itemsPrice: 0,

    init() {
        this.items = CARTITEMS;
        this.containerItems = document.querySelector('#cart-items');
        this.containerCounter = document.querySelector('#cart-counter');
        this.containerPrice = document.querySelector('#cart-prices');
        this.containerItems.addEventListener('click', this.checkChanges.bind(this));

        this.render();
    },

    checkChanges(evt) {
        const id = evt.path[1].dataset.id;
        const prices = this.prices.find(cartItem => cartItem.id === id);
        const find = this.items.find(cartItem => cartItem.id === id);

        if (evt.target.classList.contains('item-delete')) {
            this.removeItem(find.id);
        } else if (evt.target.classList.contains('right')) {
            find.amount++;
            find.price = (+find.price) + (+prices.price);
        } else if (evt.target.classList.contains('left')) {
            if (find.amount > 1) {
                find.amount--;
                find.price = (+find.price) - (+prices.price);
            };
        };

        this.render();
    },

    removeItem(id) {
        const find = this.items.find(item => item.id === id);
        let index = this.items.indexOf(find);
        this.items.splice(index, 1);

        this.render();
    },

    removeAllItems() {
        this.items = [];
        this.render();
    },

    createItem(item) {
        const { imgUrl, name, price, amount, id } = item;

        return `
        <hr>
        <div class="cart__item">
            <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
            <div class="cart__item__info">
                <span>Name: <b>${name}</b></span>
                <div class="price__block">
                    <span>Cost: <b>$${price}</b></span>
                    <div class="quantity" data-id="${id}"><span class="left">-</span><span class="amount">${amount}</span><span class="right">+</span></div>
                </div>
                <div data-id="${id}"><span class="item-delete">Remove this product</span></div>
            </div>
        </div>`;
    },

    addItem(item) {
        const { imgUrl, name, price, id } = item;
        const find = this.items.find(cartItem => cartItem.id === id);

        if (!find) {
            const newItem = { imgUrl, name, price, id };
            newItem.amount = 1;
            this.items.push(newItem);
            this.prices.push(item);
        };

        this.render();
    },

    countPrice() {
        this.itemsPrice = this.items.reduce((acc, item) => {
            acc += (+item.price);
            return acc;
        }, 0);

        this.containerPrice.innerHTML = `$${this.itemsPrice}`;
    },

    countAmount() {
        this.itemsCount = this.items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0);

        this.containerCounter.innerHTML = `(${this.itemsCount})`;
    },

    getTotal(itemsCount, itemsPrice) {
        return `
        <div class="total"><span>Total quantity: <b>${itemsCount}</b></span><span>Total price: <b>$${itemsPrice}</b></span></div>
        `;
    },

    render() {
        result = `<h2 class="head-bascket">Main products</h2>`;

        if (!(this.items.length > 0)) {
            result += `<hr>
            <p class="no-bascket">There are no products. Select products to purchase from catalog.</p>`;
        };

        this.items.forEach(item => {
            result += this.createItem(item);
        });

        this.countPrice();
        this.countAmount();

        if (result && this.items.length > 0) {
            result += this.getTotal(this.itemsCount, this.itemsPrice);
        };

        this.containerItems.innerHTML = result;
    },
};

cart.init();