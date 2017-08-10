'use strict';

import adaptersFactory from './adapters/{{widgetNameParamCase}}.edorasone.adapter';

export default (options) => {
  return {
    adapters: adaptersFactory(options),
    template: `
      <{{widgetNameParamCase}}
        id="{{columnMetadata.id}}"
        configuration="columnMetadata.configuration"
        ec-bindings="columnBindings"
        ec-data="columnData"
        ec-metadata="columnMetadata"
        ew-editable
        ng-model>
      </{{widgetNameParamCase}}>
    `
  };
};
