import { configureStore } from '@reduxjs/toolkit';
import watchBrandsReducer from './watchBrandsSlice';
import brandReducer from './brandSlice';
import familyReducer from './familySlice';

const store = configureStore({
  reducer: {
    watchBrands: watchBrandsReducer,
    brand: brandReducer,
    brandFamilies: familyReducer,
  },
});

export default store;
