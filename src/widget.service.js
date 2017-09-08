'use strict';

export default class {{widgetNameFullCamelCase}}Service {

  constructor($http) {
    this.$http = $http;

    this.API = 'https://jsonplaceholder.typicode.com';
  }

  /**
   * Load data via API
   * loadData :: string -> undefined
   */
  loadData(id) {
    return this.$http.get(`${this.API}/users/${id}`);
  }

}

{{widgetNameFullCamelCase}}Service.$inject = [
  '$http'
];
