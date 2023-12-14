import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from 'store/consts.ts';

const initialState = {
  filters: '',
};

export const appSlice = createSlice({
  name: SLICE_KEY.APP,
  initialState,
  reducers: {
    setFilters: (state, {payload}) => {
      state.filters = payload;
    },
  },
});

export const appPersistConfig = {
  key: SLICE_KEY.APP,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
