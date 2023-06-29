import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RocketItem from '../../components/Rockets/rockets';
import {
  reserveRocket,
  cancelationRocket,
} from '../../Redux/rockets/rocketSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

const dispatchMock = jest.fn();

beforeEach(() => {
  useDispatch.mockReturnValue(dispatchMock);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('RocketItem component', () => {
  const rocketData = {
    id: 1,
    name: 'Falcon 9',
    description: 'Falcon 9 is a reusable rocket developed by SpaceX.',
    flickr_images: 'https://example.com/rocket.jpg',
    reserved: false,
  };

  it('should render correctly and handle click event', () => {
    const { getByText } = render(<RocketItem data={rocketData} />);

    const reserveButton = getByText('Reserve Rocket');
    fireEvent.click(reserveButton);

    expect(dispatchMock).toHaveBeenCalledWith(reserveRocket(1));
  });

  it('should render correctly with reserved status and handle click event', () => {
    const reservedRocketData = {
      ...rocketData,
      reserved: true,
    };

    const { getByText } = render(<RocketItem data={reservedRocketData} />);

    const cancelButton = getByText('Cancel Reservation');
    fireEvent.click(cancelButton);

    expect(dispatchMock).toHaveBeenCalledWith(cancelationRocket(1));
  });
});
