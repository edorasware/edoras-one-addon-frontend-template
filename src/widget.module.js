'use strict';

import {{widgetNameFullPascalCase}}Component from './{{widgetNameFullParamCase}}.component';
import {{widgetNameFullPascalCase}}Service from './{{widgetNameFullParamCase}}.service';

export default angular
  .module('{{widgetNameFullCamelCase}}Module', [])
  .component('{{widgetNameFullCamelCase}}', {{widgetNameFullPascalCase}}Component)
  .service('{{widgetNameFullCamelCase}}Service', {{widgetNameFullPascalCase}}Service);
