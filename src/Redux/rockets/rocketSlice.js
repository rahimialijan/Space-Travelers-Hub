import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRocketsData = createAsyncThunk(
  'rockets/getRocketsData',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(ROCKET_URL);
      return response.data.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        flickr_images: item.flickr_images,
      }));
    } catch (error) {
      return rejectWithValue(error);
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
  reducers: {},
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

export default rocketSlice.reducer;
