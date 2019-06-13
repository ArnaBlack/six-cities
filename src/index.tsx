import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Router} from 'react-router-dom';

import reducer from './store/rootReducer';
import api from './api';
import history from './history';

import App from './components/app/app';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
    ),
);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
