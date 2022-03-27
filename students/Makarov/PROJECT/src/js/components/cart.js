const CARTITEMS = [];

const cart = {
  itemContainer: null,
  containerCounter: null,
  items: null,
  itemsCount: 0,

  init() {
    this.items = CARTITEMS;
    this.itemContainer = document.querySelector('#cart__items');
    this.containerCounter = document.querySelector('#cart__counter');
    this.render();
    this.handleEvents();
  },

  handleEvents() {
    this.itemContainer.addEventListener('click', e => {
      if (e.target.classList.contains('cart__delete-btn')) {
        const id = e.target.parentNode.dataset.id
        this.removeItem(id);
      } else if (e.target.classList.contains('cart-item__btn_plus')) {
        const id = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        this.increaseItemAmount(id);
      } else if (e.target.classList.contains('cart-item__btn_minus')) {
        const id = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        this.decreaseItemAmount(id);
      }
    });
  },

  createItem(item) {
    const { imgFileName, title, price, amount, id } = item;
    return `
    <div class="cart-item" data-id="${id}">
        <img class="cart-item__img" src="${IMG_LINK_TEMPLATE + imgFileName}">
        <div class="cart-item__info">
          <span class="cart-item__title">${title}</span>
          <div class="cart-item__order">
            <span class="cart-item__price">${price}</span>
            <span class="cart-item__amount">
              <b class="cart-item__btn cart-item__btn_minus">-</b>${amount}<b class="cart-item__btn cart-item__btn_plus">+</b>
            </span>
          </div>
        </div>
        <button class="cart__delete-btn">
        ×
        </button>
    </div>
    `;
  },

  addItem(item) {
    const { imgFileName, title, price, id } = item;
    const find = this.items.find(cartItem => cartItem.id === id);
    if (!find) {
      const newItem = { imgFileName, title, price, id };
      newItem.amount = 1;
      this.items.push(newItem);
    } else {
      find.amount++;
    }
    this.render();
  },

  removeItem(id) {
    let index = null;
    CARTITEMS.forEach((el, i) => {
      if (el.id === id) {
        index = i;
      }
    });
    CARTITEMS.splice(index, 1);
    this.render();
  },

  increaseItemAmount(id) {
    const selected = this.items.find(item => item.id === id);
    if (selected) {
      selected.amount++;
    }
    this.render();
  },

  decreaseItemAmount(id) {
    const selected = this.items.find(item => item.id === id);
    if (selected && selected.amount > 1) {
      selected.amount--;
    } else if (selected && selected.amount === 1) {
      this.removeItem(id);
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

    this.itemContainer.innerHTML = result;
    this.countAmount();
    this.containerCounter.innerHTML = `(${this.itemsCount})`;
  },
};

cart.init();