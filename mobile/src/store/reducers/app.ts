import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from '../consts.ts';

const state = {
  filters: '',
};

export const appSlice = createSlice({
  name: SLICE_KEY.APP,
  initialState: state,
  reducers: {
    setFilters: (state, {payload}) => {
      console.log(state, payload);
    },
  },
});

export const appPersistConfig = {
  key: SLICE_KEY.APP,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
