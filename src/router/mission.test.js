import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/store';

import Missions from './mission';

test('renders Missions component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
