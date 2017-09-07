'use strict';

import adaptersFactory from './adapters/{{widgetNameParamCase}}.adapter';

export default (options) => {
  return {
    adapters: adaptersFactory(options),
    template: `
      <{{widgetNameFullParamCase}}
        id="{{columnMetadata.id}}"
        configuration="columnMetadata.configuration"
        ec-bindings="columnBindings"
        ec-data="columnData"
        ec-metadata="columnMetadata"
        ew-editable
        ng-model>
      </{{widgetNameFullParamCase}}>
    `
  };
};
