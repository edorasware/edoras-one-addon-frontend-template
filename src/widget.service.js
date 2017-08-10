'use strict';

export default class {{widgetNameCamelCase}}Service {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  /**
   * Load rating via API
   * loadRating :: string -> undefined
   */
  loadRating(globalId) {
    return this.$http.get(`rating/${globalId}`);
  }

  /**
   * Set rating via API
   * setRating :: (string, integer) -> undefined
   */
  setRating(globalId, ownRating) {
    return this.$http.post(`rating/${globalId}`, {
      ownRating: ownRating
    });
  }

}

{{widgetNameCamelCase}}Service.$inject = [
  '$http',
  '$q'
];
