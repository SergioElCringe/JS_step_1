const fetchData = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png',];
    const app = {
      items: null,
      urlToImages: './src/assets/img',
      selected: null,
      mainImg: null,
      carouselContainer: null,
      slideIndex: 0,
      container: null,

      init(data) {
        this.items = data;
        this.selected = this.items[0];
        this.mainImg = document.querySelector('#img__main');
        this.carouselContainer = document.querySelector('.carousel');
        this.carouselContainer.addEventListener('click', this.clickHandler.bind(this));
        this.container = document.querySelector('.main-img');
        this.container.addEventListener('click', this.showSlides.bind(this));
        this.render();
        this.createCarousel();
      },

      createCarousel() {
        let accum = '';
        this.items.forEach(item => {
          accum += `<img 
            src="${ this.urlToImages + item }" 
            class="img__preview" 
            data-url="${ item }"
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
        }
      },

      showSlides(event) {
        if (event.target.dataset.set === 'right') {
          this.click = true;
          this.slideIndex++;

          if (!fetchData[this.slideIndex]) {
            this.slideIndex = 0;
          };
        } else if (event.target.dataset.set === 'left') {
          if (this.click) {
            this.slideIndex--;

            if (!fetchData[this.slideIndex]) {
              this.slideIndex = 5;
            };
          } else {
            if (fetchData[this.slideIndex] === fetchData[0]) {
              this.slideIndex = 6;
            };

            this.slideIndex--;
          };
        };
        
        this.changeImg(fetchData[this.slideIndex]);
      },
    };


    app.init(fetchData);