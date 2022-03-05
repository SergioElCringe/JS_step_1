const CARTITEMS = [];
const cart = {
    containerItems: null,
    containerCounter: null,
    containerTotalPrice: null,
    items: null,
    itemsCount: 0,
    itemsTotalSum: 0,

    init() {
        this.items = CARTITEMS;
        this.containerItems = document.querySelector('#cart-items');
        this.containerCounter = document.querySelector('#cart-counter');
        this.containerTotalPrice = document.querySelector('#cart-total-price');

        this.render();
    },
    
    createItem(item) {
        const { imgUrl, name, price, amount } = item;
        return `
        <div class="cart__item">
            <img class="cart__item__img" src="${ PRODUCTS_API + imgUrl}">
            <div class="cart__item__info">
                <span class="cart__item__name">${ name }</span>
                <div class="price__block">
                    <span class="cart__item__price">$${ price }</span>
                    <span class="cart__item__amount"> x${ amount }</span>
                    <span class="cart__item__total-price">($${ price * amount })</span>
                </div>
            </div>
            <div class="cart__item__del">
                x
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

    countTotalSum() {
        this.itemsTotalSum = this.items.reduce((accum, item) => {
            accum += Number(item.amount * item.price);
            return accum;
        }, 0);
    },

    render() {
        let result = '';

        this.items.forEach(item => {
            result += this.createItem(item);
        });

        this.containerItems.innerHTML = result;
        this.countAmount();
        this.countTotalSum();
        this.containerCounter.innerHTML = `( ${this.itemsCount} )`;
        this.containerTotalPrice.innerHTML = `$${this.itemsTotalSum}`;

    },
};

cart.init();
