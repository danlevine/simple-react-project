import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tryitApp from './reducers';
import App from './components/App';

import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

let store = createStore(tryitApp, persistedState);

store.subscribe(throttle(() => {
  saveState({
    items: store.getState().items
  });
}, 1000));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);