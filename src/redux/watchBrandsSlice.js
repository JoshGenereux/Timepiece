import { createSlice } from '@reduxjs/toolkit';

const watchBrandsSlice = createSlice({
  name: 'watchBrands',
  initialState: {
    brands: [],
  },
  reducers: {
    addBrand: (state, action) => {
      state.brands.push(action.payload);
    },
    removeBrand: (state, action) => {
      state.brands.splice(action.payload, 1);
    },
    clearBrands: (state) => {
      state.brands = [];
    },
  },
});

export const { addBrand, removeBrand, clearBrands } = watchBrandsSlice.actions;
export default watchBrandsSlice.reducer;
