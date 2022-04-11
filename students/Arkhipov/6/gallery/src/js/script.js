const fetchData = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png',];
const app = {
	items: null,
	urlToImages: './src/assets/img',
	selected: null,
	mainImg: null,
	carouselContainer: null,
	container: null,
	index: null,

	init(data) {
		this.items = data;
		this.selected = this.items[0];
		this.mainImg = document.querySelector('#img__main');
		this.carouselContainer = document.querySelector('.carousel');
		this.container = document.querySelector('.container');
		this.container.addEventListener('click', this.changeHandler.bind(this));
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
		const url = event.target.dataset.url;
		this.changeImg(url);
	},

	changeHandler(event) {
		if (event.target.tagName === 'IMG' && event.target.className === 'img__preview') {
			this.clickHandler(event);
		}
		else if (event.target.dataset.direction === 'right') {
			fetchData.find(this.nextSlide.bind(this));
			this.changeImg(this.index);
		}
		else if (event.target.dataset.direction === 'left') {
			fetchData.find(this.previousSlide.bind(this));
			this.changeImg(this.index);
		}
	},

	nextSlide(el, index) {
		if (el === this.selected) {
			if (index !== fetchData.length - 1) {
				this.index = fetchData[++index];
			} else {
				this.index = fetchData[0];
			}
		}
	},

	previousSlide(el, index) {
		if (el === this.selected) {
			if (index !== 0) {
				this.index = fetchData[--index];
			} else {
				this.index = fetchData[fetchData.length - 1];
			}
		}
	},
};

app.init(fetchData);
