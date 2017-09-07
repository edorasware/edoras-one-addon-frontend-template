'use strict';

import {{widgetNameFullPascalCase}}Component from './{{widgetNameParamCase}}.component';
import {{widgetNameFullPascalCase}}Service from './{{widgetNameParamCase}}.service';

export default angular
  .module('{{widgetNameFullCamelCase}}Module', [])
  .component('{{widgetNameFullCamelCase}}', {{widgetNameFullPascalCase}}Component)
  .service('{{widgetNameFullCamelCase}}Service', {{widgetNameFullPascalCase}}Service);
