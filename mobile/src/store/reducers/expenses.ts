import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from 'store/consts.ts';

const initialState = {
  totalExpenses: 1111,
  totalExpensesItems: 3,
  items: [
    {
      date: '2020-08-28T',
      title: 'Some expense 3',
      amount: '500.50',
    },
    {
      date: '2020-08-28T',
      title: 'Some expense 2',
      amount: '500.50',
    },
    {
      date: '2020-08-27T',
      title: 'Some expense 1',
      amount: '293.50',
    },
  ],
};

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
