const fetchData = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg',];
const app = {
    items: null,
    urlToImages: './src/assets/images',
    selected: null,
    mainImg: null,
    carouselContainer: null,
    imgNumber: 1,

    init(data) {
        this.items = data;
        this.selected = this.items[0];
        this.mainImg = document.querySelector('#img__main');
        this.carouselContainer = document.querySelector('.carousel');
        this.imgContainer = document.querySelector('.wrapper');

        this.carouselContainer.addEventListener('click', this.clickHandler.bind(this));
        this.imgContainer.addEventListener('click', this.clickHandler.bind(this));

        this.render();
        this.createCarousel();
    },

    createCarousel() {
        let accum = '';
        this.items.forEach(item => {
            accum += `<img 
    src="${this.urlToImages + item}" 
    class="img__preview" 
    data-url="${item}"
  />`
        });
        this.carouselContainer.innerHTML = accum;
    },

    changeImg(url) {
        this.selected = url;
        this.render();
    },

    render() {
        const url = this.urlToImages + this.selected;
        this.mainImg.src = url;
    },

    clickHandler(event) {
        if (event.target.tagName === 'IMG') {
            const url = event.target.dataset.url;
            this.changeImg(url);
        } else if (event.target.classList.contains('right-btn')) {
            this.getNextImg();
        } else if (event.target.classList.contains('left-btn')) {
            this.getPrevImg();

        }

    },

    getNextImg() {
        if (this.imgNumber <= this.items.length - 1) {
            this.imgNumber++;
            let urlNextimg = `/${this.imgNumber}` + '.jpg';
            this.changeImg(urlNextimg)

        } else {
            this.imgNumber = 1;
            let urlNextimg = `/${this.imgNumber}` + '.jpg';
            this.changeImg(urlNextimg);
        }
    },

    getPrevImg() {
        if (this.imgNumber > 1) {
            this.imgNumber--;
            let urlNextimg = `/${this.imgNumber}` + '.jpg';
            this.changeImg(urlNextimg)

        } else {
            this.imgNumber = this.items.length;
            let urlNextimg = `/${this.imgNumber}` + '.jpg';
            this.changeImg(urlNextimg);
        }
    },
};


app.init(fetchData);