import './scss/main.scss';
import configuration from './src/{{widgetNameParamCase}}.configuration';
import module from './src/{{widgetNameParamCase}}.module';

// register widget in view engine
window.edoras.configuration.widgets.register({
  config: configuration({}),
  module: module.name,
  name: '{{widgetNameCamelCase}}',
  type: window.edoras.configuration.widgets.types.get().COMPONENT
});
