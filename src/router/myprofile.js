import React from 'react';
import MissionProfile from '../components/missionsProfile';
import '../components/profile.css';

const MyProfile = () => (
  <div className="profile-container">
    <section className="mission-container">
      <div className="title">
        My Missions
      </div>
      <MissionProfile />
    </section>
  </div>
);

export default MyProfile;
