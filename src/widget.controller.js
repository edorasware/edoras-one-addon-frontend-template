'use strict';

export default class {{widgetNameCamelCase}}Controller {

  constructor($scope, {{widgetNameCamelCase}}Service) {
    this.$scope = $scope;
    this.{{widgetNameCamelCase}}Service = {{widgetNameCamelCase}}Service;

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
    this.edorasAddonStarRatingService.loadData('1').then((response) => {
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

{{widgetNameCamelCase}}Controller.$inject = [
  '$scope',
  '{{widgetNameCamelCase}}Service'
];
