import { createSlice } from '@reduxjs/toolkit';
import { ENTRIES } from '../../app/shared/ENTRIES';
const initialState = {
  entriesArray: ENTRIES,
};
const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      console.log('addComment action.payload:', action.payload);
      console.log('addComment state.entriesArray:', state.entriesArray);
      const newEntry = {
        id: state.entriesArray.length + 1,
        ...action.payload,
      };
      state.entriesArray.push(newEntry);
    },
  },
});

export const entriesReducer = entriesSlice.reducer;

export const { addEntry } = entriesSlice.actions;

export const selectEntriesByMetricId = (metricId) => (state) => {
  return state.entries.entriesArray.filter(
    (entry) => entry.metricId === parseInt(metricId)
  );
};

// import { createSlice } from '@reduxjs/toolkit';
// import { ENTRIES } from '../../app/shared/ENTRIES';

// const initialState = {
//   entriesArray: ENTRIES,
// };

// const entriesSlice = createSlice({
//   name: 'entries',
//   initialState,
// });

// export const entriesReducer = entriesSlice.reducer;

// export const selectEntriesByMetricId = (metricId) => (state) => {
//   return state.entries.entriesArray.filter(
//     (entry) => entry.metricId === parseInt(metricId)
//   );
// };
