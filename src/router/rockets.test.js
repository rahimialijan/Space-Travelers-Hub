import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from './rockets';
import store from '../redux/store';

jest.mock('axios');

it('renders Correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
