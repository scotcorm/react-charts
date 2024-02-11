import { createSlice } from '@reduxjs/toolkit';
import { METRIC } from '../../app/shared/METRICS';

const initialState = {
  metricsArray: METRIC,
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
});

export const metricsReducer = metricsSlice.reducer;

export const selectAllMetrics = (state) => {
  return state.metrics.metricsArray;
};

export const selectMetricById = (id) => (state) => {
  return state.metrics.metricsArray.find(
    (metric) => metric.id === parseInt(id)
  );
};

export const selectFeaturedMetric = (state) => {
  return state.metrics.metricsArray.find((metric) => metric.featured);
};
