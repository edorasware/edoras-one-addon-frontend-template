'use strict';

export default class {{widgetNameCamelCase}}Controller {

  constructor($scope, {{widgetNameCamelCase}}Service) {
    this.$scope = $scope;
    this.{{widgetNameCamelCase}}Service = {{widgetNameCamelCase}}Service;

    this.state = {};
    this.state.data = null;
    this.state.options = [1, 2, 3, 4, 5];

    this.$onInit = () => {
      this.initialize();
    };

    this.$onDestroy = () => {
      this.stateDispose();
    };
  }

  /**
   * Load initial data
   * initialize :: undefined -> undefined
   */
  initialize() {
    if (this.bindings.root.globalId) {
      this.{{widgetNameCamelCase}}Service.loadRating(
        this.bindings.root.globalId).then((response) => {
        this.state.data = response.data;
      });
    }
  }

  /**
   * Set rating (create and update)
   * setRating :: undefined -> undefined
   */
  setRating() {
    this.{{widgetNameCamelCase}}Service.setRating(
      this.bindings.root.globalId,
      this.state.data.ownRating
    ).then((response) => {
      // Update state with most recent data
      this.state.data = response.data;
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
