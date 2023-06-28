import { useSelector } from 'react-redux';
import './rocketProfile.css';

const RocketProfile = () => {
  const { reservedRockets } = useSelector((state) => state.rockets);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRocketsData());
  // }, [dispatch]);
  return (
    <>
      {reservedRockets.length === 0 ? (
        <p className="no-rocket">You have not joined any Rockets</p>
      ) : (
        <table className="rocket-list">
          {reservedRockets.map((rocket) => (
            <tr key={rocket.id}>
              <h4>{rocket.name}</h4>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default RocketProfile;
