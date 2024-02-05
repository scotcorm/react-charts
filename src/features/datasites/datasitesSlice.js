import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DATASITES } from '../../app/shared/DATASITES';
import { baseUrl } from '../../app/shared/baseUrl';
//import { mapImageURL } from '../../utils/mapImageURL';

export const fetchDatasites = createAsyncThunk(
  'datasites/fetchDatasites',
  async () => {
    const response = await fetch(baseUrl + 'datasites');
    if (!response.ok) {
      return Promise.reject('Unable to fetch, status: ' + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  datasitesArray: [],
  isLoading: true,
  errMsg: '',
};

const datasitesSlice = createSlice({
  name: 'datasites',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDatasites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDatasites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      //state.datasitesArray = mapImageURL(action.payload);
    },
    [fetchDatasites.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    },
  },
});

export const datasitesReducer = datasitesSlice.reducer;

export const selectAllDatasites = (state) => {
  return state.datasites.datasitesArray;
};

export const selectDatasiteById = (id) => (state) => {
  return state.datasites.datasitesArray.find(
    (datasite) => datasite.id === parseInt(id)
  );
};

export const selectFeaturedDatasite = (state) => {
  return {
    featuredItem: state.datasites.datasitesArray.find(
      (datasite) => datasite.featured
    ),
    isLoading: state.datasites.isLoading,
    errMsg: state.datasites.errMsg,
  };
};
