import { configureStore } from '@reduxjs/toolkit';
import watches from './watches';
import counterReducer from './test';

const store = configureStore({
  reducer: {
    watches: watches,
    counter: counterReducer,
  },
});

export default store;
