'use strict';

import {{widgetNameFullCamelCase}}Controller from './{{widgetNameParamCase}}.controller';
import {{widgetNameFullCamelCase}}Template from './{{widgetNameParamCase}}.tpl.html';

export default {
  bindings: {
    bindings: '<ecBindings',
    configuration: '<',
    data: '<ecData',
    editable: '<ewEditable',
    metadata: '<ecMetadata',
    value: '=ngModel'
  },
  controller: {{widgetNameFullCamelCase}}Controller,
  template: {{widgetNameFullCamelCase}}Template
};
