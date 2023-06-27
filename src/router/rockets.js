import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRocketsData } from '../Redux/rockets/rocketSlice';
import RocketItem from '../components/rockets';

const Rockets = () => {
  const { rocketData, isLoading, error } = useSelector(
    (store) => store.rockets,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsData());
  }, [dispatch]);
  if (error) {
    return <div>{error.message}</div>;
  }
  return isLoading ? (
    <div>Data is loading...</div>
  ) : (
    <div>
      {rocketData.map((data) => (
        <RocketItem key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Rockets;
