import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from 'store/consts.ts';

const initialState = {
  isModalShown: false,
  filters: {
    title: '',
    date: '',
  },
};

export const globalSlice = createSlice({
  name: SLICE_KEY.GLOBAL,
  initialState,
  reducers: {
    setIsModalShown: (state, {payload}) => {
      state.isModalShown = payload;
    },
    setFilters: (state, {payload}) => {
      state.filters = payload;
    },
  },
});

export const globalPersistConfig = {
  key: SLICE_KEY.GLOBAL,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: ['filters'],
};
