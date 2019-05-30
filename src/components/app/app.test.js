import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders`, () => {
  const tree = shallow(<App />);

  expect(tree).toMatchSnapshot();
});
