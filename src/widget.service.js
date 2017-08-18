'use strict';

export default class {{widgetNameCamelCase}}Service {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

}

{{widgetNameCamelCase}}Service.$inject = [
  '$http',
  '$q'
];
