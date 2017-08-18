'use strict';

export default class {{widgetNameCamelCase}}Service {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;

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

{{widgetNameCamelCase}}Service.$inject = [
  '$http',
  '$q'
];
