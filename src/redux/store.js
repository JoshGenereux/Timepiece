import { configureStore } from '@reduxjs/toolkit';
import watchBrandsReducer from './watchBrandsSlice';

const store = configureStore({
  reducer: {
    watchBrands: watchBrandsReducer,
  },
});

export default store;
