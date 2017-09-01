import './scss/main.scss';
import configuration from './src/{{widgetNameFullParamCase}}.configuration';
import module from './src/{{widgetNameFullParamCase}}.module';

// register widget in view engine
window.edoras.configuration.widgets.register({
  config: configuration({}),
  module: module.name,
  name: '{{widgetNameFullCamelCase}}',
  type: window.edoras.configuration.widgets.types.get().COMPONENT
});
