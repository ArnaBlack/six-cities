import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offersMock from './mocks/offers';

const cityCoordinates = [52.38333, 4.9];

ReactDOM.render(
    <App
      cityCoordinates={cityCoordinates}
      offers={offersMock}
    />,
    document.querySelector(`#root`)
);
