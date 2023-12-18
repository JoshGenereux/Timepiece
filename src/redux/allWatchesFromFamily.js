import { createSlice } from '@reduxjs/toolkit';

const allWatchesFromFamilySlice = createSlice({
  name: 'allWatches',
  initialState: {
    watches: [],
  },
  reducers: {
    storeWatch: (state, action) => {
      state.watches.push(action.payload);
    },
  },
});

export const { storeWatch } = allWatchesFromFamilySlice.actions;
export default allWatchesFromFamilySlice.reducer;
