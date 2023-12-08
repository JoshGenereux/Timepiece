import { createSlice } from '@reduxjs/toolkit';

const brandSlice = createSlice({
  name: 'brand',
  initialState: {
    brand: {},
  },
  reducers: {
    storeBrand: (state, action) => {
      state.name = action.payload;
    },
    clearBrand: (state, action) => {
      state.name = {};
    },
  },
});

export const { storeBrand, clearBrand } = brandSlice.actions;
export default brandSlice.reducer;
