import { configureStore } from '@reduxjs/toolkit';
import watchBrandsReducer from './watchBrandsSlice';
import brandReducer from './brandSlice';

const store = configureStore({
  reducer: {
    watchBrands: watchBrandsReducer,
    brand: brandReducer,
  },
});

export default store;
