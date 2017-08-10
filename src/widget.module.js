'use strict';

import {{widgetNamePascalCase}}Component from './{{widgetNameParamCase}}.component';
import {{widgetNamePascalCase}}Service from './{{widgetNameParamCase}}.service';

export default angular
  .module('{{widgetNameCamelCase}}Module', [])
  .component('{{widgetNameCamelCase}}Rating', {{widgetNamePascalCase}}Component)
  .service('{{widgetNameCamelCase}}Service', {{widgetNamePascalCase}}Service);
