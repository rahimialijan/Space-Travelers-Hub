import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
