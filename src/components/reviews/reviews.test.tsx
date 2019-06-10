import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Reviews} from './reviews';

configure({adapter: new Adapter()});

const mock = {
  isLoading: false,
  placeId: 1,
  reviews: [
    {
      id: 1,
      user: {
        avatarUrl: ``,
        id: 1,
        isPro: false,
        name: ``,
      },
      rating: 4,
      comment: ``,
      date: ``,
    },
  ],
};

it(`Reviews correctly renders`, () => {
  const {
    isLoading,
    placeId,
    reviews,
  } = mock;
  const loadReviews = jest.fn();
  const tree = shallow(<Reviews
    isLoading={isLoading}
    placeId={placeId}
    reviews={reviews}
    loadReviews={loadReviews}
  />);

  expect(tree).toMatchSnapshot();
});
