import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Review from './review';

const mock = {
  review: {
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
};

it(`Review correctly renders`, () => {
  const {review} = mock;
  const tree = renderer
    .create(<Review {...review} />);

  expect(tree).toMatchSnapshot();
});
