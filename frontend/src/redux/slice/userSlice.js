// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Dummy API fetch simulation
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return [
    { id: "user001", name: "John Smith", email: "john@example.com", meters: ["MTR001", "MTR002"] },
    { id: "user002", name: "Emma Johnson", email: "emma@example.com", meters: ["MTR003"] },
    { id: "user003", name: "Michael Brown", email: "michael@example.com", meters: ["MTR004"] },
    { id: "user004", name: "Sarah Davis", email: "sarah@example.com", meters: [] },
    { id: "user005", name: "David Wilson", email: "david@example.com", meters: [] },
  ];
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
    search: '',
    selectedUser: null,
  },
  reducers: {
    setUserSearch(state, action) {
      state.search = action.payload;
    },
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUserSearch, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
