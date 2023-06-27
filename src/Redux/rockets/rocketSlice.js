import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRocketsData = createAsyncThunk(
  'rockets/getRocketsData',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(ROCKET_URL);
      return response.data.map((item) => ({
        id: item.rocket_id,
        name: item.rocket_name,
        type: item.rocket_type,
        description: item.description,
        flickr_images: item.flickr_images,
      }));
    } catch (error) {
      return rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  rocketData: [],
  isLoading: false,
  error: undefined,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      state.rocketData = state.rocketData.map((rocket) => (rocket.id === action.payload
        ? {
          ...rocket,
          reserved: true,
        }
        : { ...rocket }));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRocketsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRocketsData.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.rocketData = action.payload;
      })
      .addCase(getRocketsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
