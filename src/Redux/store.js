import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketSlice';
import missionsReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
