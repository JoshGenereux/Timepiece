import { configureStore } from '@reduxjs/toolkit';
import watchBrandsReducer from './watchBrandsSlice';
import brandReducer from './brandSlice';
import familyReducer from './familySlice';
import allWatchesReducer from './allWatchesFromFamily';

const store = configureStore({
  reducer: {
    watchBrands: watchBrandsReducer,
    brand: brandReducer,
    brandFamilies: familyReducer,
    allWatches: allWatchesReducer,
  },
});

export default store;
