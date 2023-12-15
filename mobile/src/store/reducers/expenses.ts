import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from 'store/consts.ts';

const MOCK_STATE = {
  totalExpenses: 1111,
  totalExpensesItems: 3,
  items: [
    {
      id: '3cbf06f0-9b5e-11ee-b9d1-0242ac120002',
      date: '2020-10-31T01:30:00.000-05:00',
      title: 'Some expense 3',
      amount: 500.5,
    },
    {
      id: '8726e848-9b5e-11ee-b9d1-0242ac120002',
      date: '2020-10-31T01:30:00.000-05:00',
      title: 'Some expense 2',
      amount: 500.5,
    },
    {
      id: '8e68b366-9b5e-11ee-b9d1-0242ac120002',
      date: '2020-10-27T01:30:00.000-05:00',
      title: 'Some expense 1',
      amount: 293.5,
    },
  ],
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
