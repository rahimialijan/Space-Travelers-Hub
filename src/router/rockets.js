import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRocketsData } from '../Redux/rockets/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsData());
  }, [dispatch]);
  return (
    <div>
      <h1>Rockets</h1>
    </div>
  );
};

export default Rockets;
