const CARTITEMS = [];
const cart = {
  containerItems: null,
  containerCounter: null,
  containerCard: null,
  items: null,
  itemsCount: 0,
  info: '',
  click: false,
  clean: null,
  numberObject : 0,
  cl : '',
  index : null,
  money : null,

  init() {
    this.items = CARTITEMS;
    this.containerItems = document.querySelector('#cart-items');
    this.containerCounter = document.querySelector('#cart-counter');
    this.containerCard = document.querySelector('#ourCart');
    this.render();
  },
  deleteItem(event ){
    let de = event.target.id;
    let m = +de;
    this.index = this.items.find((el, i) => {
        if (el.id == m) {
          this.items.splice(i,1);
          console.log(i);
          this.render();
          this.createCart();
        };
      });
  },

  createItem(item) {
    const { imgUrl, name, price, amount , id } = item;
    return `
    <div class="cart__item" id="cart__item" >
        <img class="cart__item__img" src="${PRODUCTS_API + imgUrl}">
        <div class="cart__item__info">
          <span>${name}</span>
          <div class="price__block">
            <span>$${price}</span>
            <span>количество: ${amount}</span>
          </div>
        </div>
        <button class= "delete" id = " ${ id }">x</button>
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

    this.countAmount();
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
    this.info = result;
  },
  onMouseDown() {
    if (this.click == false) {
      this.click = true;
    } else {
      this.click = false;
    }
  },
  createCart(item) {
    this.onMouseDown();
    if (this.click == true) {
      let cartShow = `
      <div id="cart">
       <h2>Ваша корзина :</h2> 
       ${this.info} 
       <input id ='mon' type="text" placeholder="Шо там по деньгам?" disabled></input>
       </div>
      `;
      this.containerCard.innerHTML = cartShow;
    } else {
      this.containerCard.innerHTML = '';
    };
    if(!!this.items){
      this.money = document.querySelector('#mon');
      this.clean = document.querySelector('#cart');
      this.clean.addEventListener ('click', this.deleteItem.bind(this));
    }
    let result = null  ;
    this.index = this.items.find((el ) => {
      result += el.price * el.amount;
      this.money.value = '$' + result;
    });
  },
};

cart.init();
