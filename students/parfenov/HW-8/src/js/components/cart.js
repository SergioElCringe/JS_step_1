const CARTITEMS = [];

const cart = {
  containerItems: null,
  containerCounter: null,
  containerTotalPrise: null,
  items: [],
  itemsCount: 0,
  itemsPrise: 0,

  init() {
    this.items = CARTITEMS;
    this.containerItems = document.querySelector('#cart-items');
    this.containerCounter = document.querySelector('#cart-counter');
    this.containerTotalPrise = document.querySelector('#total-prise')

    this.handleEvents();
    this.render();
  },

  createItem(item) {
    const { imgUrl, name, price, id, amount } = item;
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
        <button class="btn-delete" 
        data-id="${id}"
        >Del</button>
    </div>
    
    `;
  },
  // <div>${this.createTotalPrise()}</div>

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

  deleteItem(item) {
    const { id } = item;
    const find = this.items.find(cartItem => cartItem.id === id);
    if (find.amount > 1) {
      find.amount--;
      this.itemsPrise -= find.price;
    } else if (find.amount = 1) {
      this.itemsPrise -= find.price;
      let index = this.items.indexOf(find);
      this.items.splice(index, 1);
    };

    this.render();
  },

  handleEvents() {
    this.containerItems.addEventListener('click', evt => {
      if (evt.target.classList.contains('btn-delete')) {
        const { id } = evt.target.dataset;
        this.deleteItem({
          id
        });
      }
    });
  },

  countAmount() {
    this.itemsCount = this.items.reduce((acc, item) => {
      acc += item.amount;
      return acc;
    }, 0);
  },

  countTotalPrise() {
    this.itemsPrise = this.items.reduce((acc, item) => {
      acc += Number(item.price) * item.amount;
      console.log(acc);
      return acc;
    }, 0);
  },

  render() {
    let result = '';

    this.items.forEach(item => {
      result += this.createItem(item);
    });

    this.containerItems.innerHTML = result;
    this.countTotalPrise();
    this.countAmount();
    this.containerCounter.innerHTML = `(${this.itemsCount}) ${this.itemsPrise}$`;
  },
};

cart.init();
