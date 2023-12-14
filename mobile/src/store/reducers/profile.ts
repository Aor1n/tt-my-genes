import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from 'store/consts.ts';

const initialState = {
  fullName: '',
};

export const profileSlice = createSlice({
  name: SLICE_KEY.PROFILE,
  initialState,
  reducers: {
    setFullName: (state, {payload}) => {
      state.fullName = payload;
    },
    clearProfile: state => {
      state.fullName = initialState.fullName;
    },
  },
});

export const profilePersistConfig = {
  key: SLICE_KEY.PROFILE,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
