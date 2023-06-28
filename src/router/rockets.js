import { useSelector } from "react-redux";

import RocketItem from "../components/rockets";

const Rockets = () => {
  const { rockets, isLoading, error } = useSelector((store) => store.rockets);

  if (error) {
    return <div>{error.message}</div>;
  }
  return isLoading ? (
    <div>Data is loading...</div>
  ) : (
    <>
      {rockets.length > 0 ? (
        <div>
          {rockets.map((data) => (
            <RocketItem key={data.id} data={data} />
          ))}
        </div>
      ) : (
        "no rockets"
      )}
    </>
  );
};

export default Rockets;
