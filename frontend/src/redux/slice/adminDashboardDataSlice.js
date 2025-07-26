// src/slice/adminDashboardDataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDashboardData = createAsyncThunk(
  'adminDashboardData/fetchDashboardData',
  async (adminId, thunkAPI) => {
    // http://localhost:5000/api/v1/adminDashboard/recent-data/68774978c2cb68989bbf187b
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/adminDashboard/recent-data/${adminId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


// Add this new thunk in adminDashboardDataSlice.js
export const fetchAdminDailyConsumption = createAsyncThunk(
  'adminDashboardData/fetchAdminDailyConsumption',
  async (adminId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/adminDashboard/get-admin-daily-consumption/${adminId}`);
      return response.data.data; // directly return data array
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const adminDashboardDataSlice = createSlice({
  name: 'adminDashboardData',
  initialState: {
    data: null,
    loading: false,
    error: null,
    dailyConsumption: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })





       // Add cases for daily consumption
      .addCase(fetchAdminDailyConsumption.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminDailyConsumption.fulfilled, (state, action) => {
        state.dailyConsumption = action.payload;
        state.loading = false;
      })
      .addCase(fetchAdminDailyConsumption.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
  }
});

export default adminDashboardDataSlice.reducer;