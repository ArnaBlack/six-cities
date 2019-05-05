import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offersMock from './mocks/offers';

ReactDOM.render(
    <App
      offers={offersMock}
    />,
    document.querySelector(`#root`)
);
