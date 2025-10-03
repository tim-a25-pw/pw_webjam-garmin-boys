import Bars from './components/Bars.js';
import Carousel from './components/Carousel.js';
import Form from './components/Form.js';
import Header from './components/Header.js';
import Scrolly from './components/Scrolly.js';
import Youtube from './components/Youtube.js';
import Scroller from './components/Scroller.js';
import TextAnim from './components/TextAnim.js';


export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {};
    this.init();
  }
  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
