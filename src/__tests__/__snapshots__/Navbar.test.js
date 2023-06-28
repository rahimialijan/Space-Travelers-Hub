import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import NavbarComponent from '../../components/navbarComponents';

test('NavbarComponent renders correctly', () => {
  const { container } = render(
    <BrowserRouter>
      {' '}
      {/* Wrap NavbarComponent with BrowserRouter */}
      <NavbarComponent />
    </BrowserRouter>,
  );
  expect(container).toMatchSnapshot();
});
