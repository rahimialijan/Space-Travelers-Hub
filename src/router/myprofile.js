import React from 'react';
import '../components/profile.css';
import RocketProfile from '../components/Rockets/RocketsProfile/rocketProfile';
import MissionProfile from '../components/Missions/missionsProfile/missionsProfile';

const Myprofile = () => (
  <div className="profile-container">
    <section className="mission-container">
      <h1>My Missions</h1>
      <MissionProfile />
    </section>
    <section className="rocket-Container">
      <h1>My Rockets</h1>
      <RocketProfile />
    </section>
  </div>
);

export default Myprofile;
