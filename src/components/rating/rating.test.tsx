import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Rating from './rating';

const mock = {
  hasValue: false,
  rating: 3.2,
};

it(`Rating renders correctly`, () => {
  const {
    hasValue,
    rating,
  } = mock;
  const tree = renderer
    .create(<Rating
      hasValue={hasValue}
      rating={rating}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
