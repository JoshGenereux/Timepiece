import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'allWatches',

  initialState: {
    data: [],
  },

  reducers: {
    setWatches: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setWatches } = counterSlice.actions;
export default counterSlice.reducer;
