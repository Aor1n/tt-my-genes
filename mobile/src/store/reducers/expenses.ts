import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from 'store/consts.ts';

const initialState = {
  totalExpenses: 0,
  totalExpensesItems: 0,
  items: [],
};

export const expensesSlice = createSlice({
  name: SLICE_KEY.EXPENSES,
  initialState,
  reducers: {
    setExpenses: (state, {payload}) => {
      state.totalExpenses = payload?.totalExpenses ?? 0;
      state.totalExpensesItems = payload?.totalExpensesItems ?? 0;
      state.items = payload?.items ?? [];
    },
  },
});

export const expensesPersistConfig = {
  key: SLICE_KEY.EXPENSES,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
