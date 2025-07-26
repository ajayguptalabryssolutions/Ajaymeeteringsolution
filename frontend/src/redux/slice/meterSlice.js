// // src/features/meter/meterSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchMeters = createAsyncThunk('meters/fetchMeters', async () => {
//   return [
//     {
//       id: "MTR001",
//       devEUI: "70B3D57ED0000001",
//       name: "Building A - Floor 1",
//       status: "online",
//       lastSeen: "2025-06-25T10:30:00Z",
//       battery: 85,
//       signal: -67,
//       type: "Smart Water Meter",
//       userId: "user001",
//       rs485Id: "RS485-001",
//     },
//     {
//       id: "MTR002",
//       devEUI: "70B3D57ED0000002",
//       name: "Building A - Floor 2",
//       status: "online",
//       lastSeen: "2025-06-25T10:25:00Z",
//       battery: 92,
//       signal: -71,
//       type: "Smart Gas Meter",
//       userId: "user001",
//       rs485Id: "RS485-002",
//     },
//     {
//       id: "MTR003",
//       devEUI: "70B3D57ED0000003",
//       name: "Building B - Basement",
//       status: "offline",
//       lastSeen: "2025-06-24T15:45:00Z",
//       battery: 23,
//       signal: -89,
//       type: "Smart Electric Meter",
//       userId: "user002",
//       rs485Id: "RS485-003",
//     },
//     {
//       id: "MTR004",
//       devEUI: "70B3D57ED0000004",
//       name: "Building C - Main",
//       status: "online",
//       lastSeen: "2025-06-25T10:32:00Z",
//       battery: 67,
//       signal: -75,
//       type: "Smart Water Meter",
//       userId: "user003",
//       rs485Id: "RS485-004",
//     },
//   ];
// });

// const meterSlice = createSlice({
//   name: 'meters',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//     searchTerm: '',
//     selectedMeter: null,
//   },
//   reducers: {
//     setMeterSearch(state, action) {
//       state.searchTerm = action.payload;
//     },
//     setSelectedMeter(state, action) {
//       state.selectedMeter = action.payload;
//     },
//     addMeters(state, action) {
//       state.data = [...state.data, ...action.payload];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMeters.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMeters.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchMeters.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setMeterSearch, setSelectedMeter, addMeters } = meterSlice.actions;
// export default meterSlice.reducer;


// src/features/meter/meterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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



export const fetchAdminMeters = createAsyncThunk(
  'meters/fetchAdminMeters',
  async (adminId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/meter/admin-meters/${adminId}`);
      return response.data.data; // Assuming your API returns { data: meters }
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Failed to fetch meters');
    }
  }
);

// const meterSlice = createSlice({
//   name: 'meters',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//     searchTerm: '',
//     selectedMeter: null,
//   },
//   reducers: {
//     setMeterSearch(state, action) {
//       state.searchTerm = action.payload;
//     },
//     setSelectedMeter(state, action) {
//       state.selectedMeter = action.payload;
//     },
//     addMeters(state, action) {
//       state.data = [...state.data, ...action.payload];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMeters.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMeters.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchMeters.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setMeterSearch, setSelectedMeter, addMeters } = meterSlice.actions;
// export default meterSlice.reducer;



const meterSlice = createSlice({
  name: 'meters',
  initialState: {
    data: [],
    adminMeters: [], // Separate array for admin-specific meters
    loading: false,
    adminLoading: false,
    error: null,
    adminError: null,
    searchTerm: '',
    selectedMeter: null,
    filters: {
      status: 'all', // 'online', 'offline', 'faulty'
      type: 'all'    // meter types
    }
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
    setStatusFilter(state, action) {
      state.filters.status = action.payload;
    },
    setTypeFilter(state, action) {
      state.filters.type = action.payload;
    },
    resetAdminMeters(state) {
      state.adminMeters = [];
      state.adminError = null;
    }
  },
  extraReducers: (builder) => {
    // For general meters
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

    // For admin-specific meters
    builder
      .addCase(fetchAdminMeters.pending, (state) => {
        state.adminLoading = true;
        state.adminError = null;
      })
      .addCase(fetchAdminMeters.fulfilled, (state, action) => {
        state.adminLoading = false;
        state.adminMeters = action.payload;
      })
      .addCase(fetchAdminMeters.rejected, (state, action) => {
        state.adminLoading = false;
        state.adminError = action.payload || action.error.message;
      });
  }
});

export const { 
  setMeterSearch, 
  setSelectedMeter, 
  addMeters,
  setStatusFilter,
  setTypeFilter,
  resetAdminMeters
} = meterSlice.actions;

// Selectors
export const selectFilteredAdminMeters = (state) => {
  const { adminMeters, filters, searchTerm } = state.meters;
  
  return adminMeters.filter(meter => {
    const matchesStatus = filters.status === 'all' || meter.status === filters.status;
    const matchesType = filters.type === 'all' || meter.type === filters.type;
    const matchesSearch = meter.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         meter.meterId.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesType && matchesSearch;
  });
};

export default meterSlice.reducer;