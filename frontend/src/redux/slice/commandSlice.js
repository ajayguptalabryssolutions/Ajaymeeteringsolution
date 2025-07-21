// // src/features/command/commandSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const sendCommand = createAsyncThunk(
//   'commands/sendCommand',
//   async (command) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const isSuccess = Math.random() > 0.2;
//         resolve({
//           ...command,
//           status: isSuccess ? 'sent' : 'failed',
//           timestamp: new Date().toISOString(),
//         });
//       }, 2000);
//     });
//   }
// );

// const commandSlice = createSlice({
//   name: 'commands',
//   initialState: {
//     history: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     addCommandToHistory: (state, action) => {
//       state.history.unshift({
//         ...action.payload,
//         status: 'manual',
//         timestamp: new Date().toISOString(),
//       });
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(sendCommand.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(sendCommand.fulfilled, (state, action) => {
//         state.loading = false;
//         state.history.unshift(action.payload);
//       })
//       .addCase(sendCommand.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// // ✅ Export this to use in MeterManagement
// export const { addCommandToHistory } = commandSlice.actions;

// export default commandSlice.reducer;


// src/features/command/commandSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to simulate sending command
export const sendCommand = createAsyncThunk(
  'commands/sendCommand',
  async (command) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.2;
        resolve({
          ...command,
          status: isSuccess ? 'sent' : 'failed',
          timestamp: new Date().toISOString(),
        });
      }, 2000);
    });
  }
);

const commandSlice = createSlice({
  name: 'commands',
  initialState: {
    history: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Fix: Don't override status or timestamp
    addCommandToHistory: (state, action) => {
      state.history.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendCommand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendCommand.fulfilled, (state, action) => {
        state.loading = false;
        state.history.unshift(action.payload);
      })
      .addCase(sendCommand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addCommandToHistory } = commandSlice.actions;
export default commandSlice.reducer;
