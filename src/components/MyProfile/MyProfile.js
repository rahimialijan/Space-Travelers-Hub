import { useSelector } from "react-redux";
import RocketProfile from "./rocketProfile/rocketProfile";

const MyProfile = () => {
  const { reservedRockets } = useSelector((state) => state.rockets);
  return (
    <div className="profile-container">
      <div>Missions</div>
      <div className="rocket-container">
        <h1>My Rockets</h1>
        {reservedRockets.length > 0 && (
          <ul>
            {reservedRockets.map((rocket) => {
              <RocketProfile key={rocket.id} rocket={rocket} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
