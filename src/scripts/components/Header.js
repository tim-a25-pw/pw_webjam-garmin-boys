export default class Header {
  constructor(element) {
    this.element = element;
    this.options = {
      treshold: 0.4,
      alwaysShow: false,
    };
    this.lastScrollPostion;
    this.scrollPosition;
    this.html = document.documentElement;
    this.init();
    this.initNavMobile();
  }

  init() {
    this.setOptions();

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  setOptions() {
    console.log(this.html);

    if ('alwaysShow' in this.html.dataset) {
      this.options.alwaysShow = true;
      console.log(this.options.alwaysShow);
    }
  }

  onScroll() {
    this.lastScrollPostion = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    this.setHeaderState();
    this.setDirections();
  }
  setHeaderState() {
    if (this.options.alwaysShow == true) {
      this.html.classList.remove('header-is-hidden');
    }
    if (
      this.scrollPosition >=
        document.scrollingElement.scrollHeight * this.options.treshold &&
      this.options.alwaysShow == false
    ) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }

  setDirections() {
    if (this.scrollPosition >= this.lastScrollPostion) {
      this.html.classList.remove('is-scrolling-up');
      this.html.classList.add('is-scrolling-down');
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }
  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
