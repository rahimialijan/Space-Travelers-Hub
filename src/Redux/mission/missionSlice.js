import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMisions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(URL);
  return response.data;
});

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
  reserveMissions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      state.reserveMissions.push(payload); // add mission ID to reservedMissions array
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    },
    leaveMission: (state, { payload }) => {
      // remove mission ID from reservedMissions array
      state.reserveMissions = state.reserveMissions.filter((missionId) => missionId !== payload);
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMisions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMisions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const result = payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          reserved: state.reserveMissions.includes(mission.mission_id),
        }));
        state.missions = result;
      })
      .addCase(fetchMisions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },

});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
