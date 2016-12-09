import { createStore } from 'redux';
import homeApp from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore() {
  const store = createStore(homeApp, DevTools.instrument());
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
