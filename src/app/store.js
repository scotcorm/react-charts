import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
//****implement Redux
import { entriesReducer } from '../features/entries/entriesSlice';
import { metricsReducer } from '../features/metrics/metricsSlice';

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
    metrics: metricsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
