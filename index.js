import './scss/main.scss';
import module from './src/edoras-widget-star-rating.module';
import config from './src/configuration';

// register widget in view engine
window.edoras.configuration.widgets.register({
  config: config({}),
  module: module.name,
  name: 'edorasWidgetStarRating',
  type: window.edoras.configuration.widgets.types.get().COMPONENT
});
