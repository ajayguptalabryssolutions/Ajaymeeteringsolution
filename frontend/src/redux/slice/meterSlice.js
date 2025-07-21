// src/features/meter/meterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMeters = createAsyncThunk('meters/fetchMeters', async () => {
  return [
    {
      id: "MTR001",
      devEUI: "70B3D57ED0000001",
      name: "Building A - Floor 1",
      status: "online",
      lastSeen: "2025-06-25T10:30:00Z",
      battery: 85,
      signal: -67,
      type: "Smart Water Meter",
      userId: "user001",
      rs485Id: "RS485-001",
    },
    {
      id: "MTR002",
      devEUI: "70B3D57ED0000002",
      name: "Building A - Floor 2",
      status: "online",
      lastSeen: "2025-06-25T10:25:00Z",
      battery: 92,
      signal: -71,
      type: "Smart Gas Meter",
      userId: "user001",
      rs485Id: "RS485-002",
    },
    {
      id: "MTR003",
      devEUI: "70B3D57ED0000003",
      name: "Building B - Basement",
      status: "offline",
      lastSeen: "2025-06-24T15:45:00Z",
      battery: 23,
      signal: -89,
      type: "Smart Electric Meter",
      userId: "user002",
      rs485Id: "RS485-003",
    },
    {
      id: "MTR004",
      devEUI: "70B3D57ED0000004",
      name: "Building C - Main",
      status: "online",
      lastSeen: "2025-06-25T10:32:00Z",
      battery: 67,
      signal: -75,
      type: "Smart Water Meter",
      userId: "user003",
      rs485Id: "RS485-004",
    },
  ];
});

const meterSlice = createSlice({
  name: 'meters',
  initialState: {
    data: [],
    loading: false,
    error: null,
    searchTerm: '',
    selectedMeter: null,
  },
  reducers: {
    setMeterSearch(state, action) {
      state.searchTerm = action.payload;
    },
    setSelectedMeter(state, action) {
      state.selectedMeter = action.payload;
    },
    addMeters(state, action) {
      state.data = [...state.data, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMeters.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMeters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setMeterSearch, setSelectedMeter, addMeters } = meterSlice.actions;
export default meterSlice.reducer;
