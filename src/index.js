import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offersMock from './mocks/offers';

ReactDOM.render(
    <App
      offers={offersMock}
      onOfferTitleClick={(evt) => evt.preventDefault()}
    />,
    document.querySelector(`#root`)
);
