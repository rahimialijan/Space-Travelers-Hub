import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});
