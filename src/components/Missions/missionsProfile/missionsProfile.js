import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMisions } from '../../../Redux/mission/missionSlice';
import './missionsProfile.css';

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
        <p className="no-missions">You have not joined any mission</p>
      ) : (
        <table className="joined missions-list">
          {reservedList.map((mission) => (
            <tr key={mission.mission_id}>
              <h4>{mission.mission_name}</h4>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default MissionProfile;
