import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from '../consts.ts';

const state = {
  fullName: '',
};

export const profileSlice = createSlice({
  name: SLICE_KEY.PROFILE,
  initialState: state,
  reducers: {
    setFullName: (state, {payload}) => {
      console.log(state, payload);
    },
  },
});

export const profilePersistConfig = {
  key: SLICE_KEY.PROFILE,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
