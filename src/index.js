import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import reducer from './store/reducers/reducer';
import offersMock from './mocks/offers';

const store = createStore(reducer);

const cityCoordinates = [52.38333, 4.9];

ReactDOM.render(
    <Provider store={store}>
      <App
        cityCoordinates={cityCoordinates}
        offers={offersMock}
      />
    </Provider>,
    document.querySelector(`#root`)
);
