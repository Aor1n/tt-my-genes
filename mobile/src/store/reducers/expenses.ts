import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from 'store/consts.ts';

const MOCK_STATE = {
  totalExpenses: 0,
  totalExpensesItems: 0,
  items: [],
};

const initialState = MOCK_STATE;

export const expensesSlice = createSlice({
  name: SLICE_KEY.EXPENSES,
  initialState,
  reducers: {
    setExpenses: (state, {payload}) => {
      state.totalExpenses = payload.totalExpenses;
      state.totalExpensesItems = payload.totalExpensesItems;
      state.items = payload.items;
    },
  },
});

export const expensesPersistConfig = {
  key: SLICE_KEY.EXPENSES,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
