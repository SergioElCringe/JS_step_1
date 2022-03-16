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

  createItem(item) {
    const { imgUrl, name, price, amount, id } = item;
    return `
    <div class="cart__item">
        <img class="cart__item__img" src="${ PRODUCTS_API + imgUrl }">
        <div class="cart__item__info">
          <span>${ name }</span>
          <div class="price__block">
            <span>Цена: $${ price }</span>
            <div class="quantity" data-id="${id}">
                <p>Кол-во:</p>
                <span class="left">-</span>
                <span class="amount">${amount}</span>
                <span class="right">+</span>
            </div>
          </div>
        </div>
        <div data-id="${ id }">
            <span class="delete">&#128465;</span>
        </div>
    </div>
    `;
  },

  checkChanges(event) {
    const id = event.path[1].dataset.id;
    const prices = this.prices.find(cartItem => cartItem.id === id);
    const find = this.items.find(cartItem => cartItem.id === id);

    if (event.target.classList.contains('delete')) {
        this.deleteItem(find.id);
    } else if (event.target.classList.contains('right')) {
        find.amount++;
        find.price = (+find.price) + (+prices.price);
    } else if (event.target.classList.contains('left')) {
        if (find.amount > 1) {
            find.amount--;
            find.price = (+find.price) - (+prices.price);
        };
    };

    this.render();
  },


  addItem(item) {
    const { imgUrl, name, price, id } = item;
    const find = this.items.find(cartItem => cartItem.id === id);
    if (!find) {
      const newItem = { imgUrl, name, price, id };
      newItem.amount = 1;
      this.items.push(newItem);
      this.prices.push(item);
    }

    this.render();
  },

  deleteItem(id){
    const find = this.items.find(item => item.id === id);
        let index = this.items.indexOf(find);
        this.items.splice(index, 1);

        this.render();
  },

  countAmount() {
    this.itemsCount = this.items.reduce((acc, item) => {
      acc += item.amount;
      return acc;
    }, 0);

    this.containerCounter.innerHTML = `(${this.itemsCount})`;
  },

  countPrice() {
    this.itemsPrice = this.items.reduce((acc, item) => {
        acc += (+item.price);
        return acc;
    }, 0);

    this.containerPrice.innerHTML = `$${ this.itemsPrice }`;
  }, 

  cartTotal(itemsPrice) {
    return `<hr>
    <div class="cart__total">
        <p>Итого:</p>
        <span>$${ itemsPrice }</span>
    </div>
    `;
  },

  render() {
    result = '';

        if (!(this.items.length > 0)) {
            result += `<p class="cart__no-bascket">Корзина пуста</p>`;
        };

        this.items.forEach(item => {
            result += this.createItem(item);
        });

        this.countPrice();
        this.countAmount();

        if (result && this.items.length > 0) {
            result += this.cartTotal(this.itemsPrice);
        };

        this.containerItems.innerHTML = result;
  },
};

cart.init();