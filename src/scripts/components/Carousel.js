import Swiper from 'swiper/bundle';

export default class Carrousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
      breakpoints: {},
    };
    this.init();
  }

  init() {
    console.log('hello');
    this.setOptions();
    this.initSwiper();
  }
  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
      };
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }

    if ('slides' in this.element.dataset) {
      this.options.slidesPerView = parseInt(
        this.element.dataset.slides || this.options.slidesPerView
      );
    }

    if ('gap' in this.element.dataset) {
      this.options.spaceBetween =
        parseFloat(this.element.dataset.slides) || this.options.slidesPerView;
    }
  }
  initSwiper() {
    if (this.element) {
      const swiper = new Swiper(this.element, this.options);
    }
  }
}
