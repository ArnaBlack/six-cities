import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {ReviewList} from './review-list';

configure({adapter: new Adapter()});

const mock = {
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

it(`ReviewList correctly renders`, () => {
  const {reviews} = mock;
  const tree = shallow(<ReviewList reviews={reviews} />);

  expect(tree).toMatchSnapshot();
});
