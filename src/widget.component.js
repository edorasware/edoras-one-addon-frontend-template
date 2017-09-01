'use strict';

import {{widgetNameFullCamelCase}}Controller from './{{widgetNameFullParamCase}}.controller';
import {{widgetNameFullCamelCase}}Template from './{{widgetNameFullParamCase}}.tpl.html';

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
