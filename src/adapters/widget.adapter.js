'use strict';

import expressionServiceFactory from 'edoras-commons/expression-service';
import { isString } from 'lodash';

export default (options) => {
  const expressionService = options.expressionService || expressionServiceFactory();

  return {
    metadataAdapter: (columnModel) => {
      return {
        configuration: columnModel.definition.extraSettings || {},
        id: columnModel.definition.id
      };
    },
    templateAdapter: (templateElement, columnModel, modelBindings) => {
      const editable = columnModel.definition.editable;
      templateElement.attr('ew-editable', isString(editable) ?
        expressionService.normalize(editable, modelBindings.data, true) : editable);
    }
  };
};
