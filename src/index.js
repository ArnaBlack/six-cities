import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const offersMock = [
  {
    mark: `Premium`,
    imageSrc: `img/apartment-01.jpg`,
    price: 120,
    inBookmarks: true,
    rating: 93,
    name: `Beautiful luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    imageSrc: `img/room.jpg`,
    price: 80,
    inBookmarks: false,
    rating: 80,
    name: `Wood and stone place`,
    type: `Private room`,
  },
  {
    imageSrc: `img/apartment-02.jpg`,
    price: 132,
    inBookmarks: true,
    rating: 80,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
  },
  {
    mark: `Premium`,
    imageSrc: `img/apartment-03.jpg`,
    price: 180,
    inBookmarks: false,
    rating: 100,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
  },
];

ReactDOM.render(
    <App
      offers={offersMock}
    />,
    document.querySelector(`#root`)
);
