import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalRoutes from './routes';
import Reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';


function configureStore () {
  let store = createStore(Reducers,undefined,
    compose(
      applyMiddleware(thunk)    ));

	let persistor = persistStore(store,
		null,
		() => {
			store.getState();
		}
	)

  return { persistor, store }
}

const { store, persistor } = configureStore();



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <GlobalRoutes />
        </Router>
      </PersistGate>
    </Provider>,
    document.body.appendChild(document.createElement('div')))
})



registerServiceWorker();
