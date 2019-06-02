import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import reducer from './store/rootReducer';
import DataOperation from './store/data/operation/operation';
import {createAPI} from './api';
import App from './components/app/app.jsx';
import AppActionCreator from './store/app/action-creator/action-creator';

const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

const onSuccessLoadOffers = (city) => store.dispatch(AppActionCreator.changeCity(city));
store.dispatch(DataOperation.loadOffers(onSuccessLoadOffers));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
