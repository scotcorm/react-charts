import { createSlice } from '@reduxjs/toolkit';
import { ENTRY } from '../../app/shared/ENTRIES';
const initialState = {
  entriesArray: ENTRY,
};
const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      console.log('addEntry action.payload:', action.payload);
      console.log('addEntry state.entriesArray:', state.entriesArray);
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

export const selectEntryById = (id) => (state) => {
  return state.entries.entriesArray.filter(
    (entry) => entry.id === parseInt(id)
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
