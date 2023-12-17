import { createSlice } from '@reduxjs/toolkit';

const familySlice = createSlice({
  name: 'brandFamilies',
  initialState: {
    families: [],
  },
  reducers: {
    addFamily: (state, action) => {
      state.families.push(action.payload);
    },
    removeFamily: (state, action) => {
      state.families.splice(action.payload, 1);
    },
    clearFamilies: (state, action) => {
      state.families = [];
    },
  },
});

export const { addFamily, removeFamily, clearFamilies } = familySlice.actions;
export default familySlice.reducer;
