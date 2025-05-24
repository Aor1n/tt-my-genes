import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SLICE_KEY} from 'store/consts.ts';
import {Expense} from 'forms/expense/useExpenseForm.ts';

interface InitialState {
  totalExpenses: number;
  totalExpensesItems: number;
  items: Expense[];
}

const initialState: InitialState = {
  totalExpenses: 0,
  totalExpensesItems: 0,
  items: [],
};

export const expensesSlice = createSlice({
  name: SLICE_KEY.EXPENSES,
  initialState,
  reducers: {
    setExpenses: (state, {payload}) => {
      state.totalExpenses =
        payload?.totalExpenses ?? initialState.totalExpenses;
      state.totalExpensesItems =
        payload?.totalExpensesItems ?? initialState.totalExpensesItems;
      state.items = payload?.items ?? initialState.items;
    },
  },
});

export const expensesPersistConfig = {
  key: SLICE_KEY.EXPENSES,
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
