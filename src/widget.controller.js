'use strict';

export default class {{widgetNameFullCamelCase}}Controller {

  constructor({{widgetNameFullCamelCase}}Service) {
    this.{{widgetNameFullCamelCase}}Service = {{widgetNameFullCamelCase}}Service;

    this.state = {
      isExecuting: false
    };

    this.$onInit = () => {
      this.initialize();
    };

    this.$onDestroy = () => {
      this.stateDispose();
    };
  }

  /**
   * Initialize
   * initialize :: undefined -> undefined
   */
  initialize() {
  }

  /**
   * Load data
   * loadData :: undefined -> undefined
   */
  loadData() {
    this.state.isExecuting = true;
    this.{{widgetNameFullCamelCase}}Service.loadData('1').then((response) => {
      this.state.isExecuting = false;
      this.value = response.data.name;
    });
  }

  /**
   * Do a shallow nullification of the state object
   * stateDispose :: undefined -> undefined
   */
  stateDispose() {
    for (let member in this.state) {
      this.state[member] = null;
    }
  }

}

{{widgetNameFullCamelCase}}Controller.$inject = [
  '{{widgetNameFullCamelCase}}Service'
];
