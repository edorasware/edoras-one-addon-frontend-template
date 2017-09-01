'use strict';

export default () => {
  return {
    metadataAdapter: (columnModel) => {
      return {
        configuration: columnModel.definition.extraSettings || {},
        id: columnModel.definition.id
      };
    },
    templateAdapter: (columnDefinitionElement, columnModel, modelPrefixes) => {
    }
  };
};
