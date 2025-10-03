export default class Scrolly {
  constructor(element) {
    this.element = element;

    this.options = {
      repeat: true,
      rootMargin: '0px',
    };

    this.init();
  }
  init() {
    this.setOptions();
    const observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    );

    const items = this.element.querySelectorAll('[data-scrolly]');
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      observer.observe(item);
    }
  }
  setOptions() {
    console.log(this.element);

    if ('noRepeat' in this.element.dataset) {
      this.options.repeat = false;
    }
  }

  watch(entries, observer) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
        //   observer.unobserve(target); Pour aretter le observe quand ta deja vue lanimation, plus clean/sobre
        if (!this.options.repeat) {
          observer.unobserve(target);
        }
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
