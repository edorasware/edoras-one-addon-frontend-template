'use strict';

import {{widgetNameCamelCase}}Controller from './{{widgetNameParamCase}}.controller';
import {{widgetNameCamelCase}}Template from './{{widgetNameParamCase}}.tpl.html';

export default {
  bindings: {
    bindings: '<ecBindings',
    configuration: '<',
    data: '<ecData',
    editable: '<ewEditable',
    metadata: '<ecMetadata',
    value: '=ngModel'
  },
  controller: {{widgetNameCamelCase}}Controller,
  template: {{widgetNameCamelCase}}Template
};
