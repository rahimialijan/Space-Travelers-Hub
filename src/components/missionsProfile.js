import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMisions } from '../Redux/mission/missionSlice';

const MissionProfile = () => {
  const dispatch = useDispatch();
  const { missions, reserveMissions } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMisions());
  }, [dispatch]);

  const reservedList = missions.filter((mission) => reserveMissions.includes(mission.mission_id));

  return (
    <>
      {reservedList.length === 0 ? (
        <p>You have not joined any mission</p>
      ) : (
        <ul className="joined missions-list">
          {reservedList.map((mission) => (
            <li key={mission.mission_id}>
              <h4>{mission.mission_name}</h4>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MissionProfile;
