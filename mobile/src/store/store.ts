import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {profilePersistConfig, profileSlice} from 'store/reducers/profile.ts';
import {globalPersistConfig, globalSlice} from 'store/reducers/global.ts';
import {SLICE_KEY} from 'store/consts.ts';
import {expensesPersistConfig, expensesSlice} from 'store/reducers/expenses.ts';

const rootPersistConfig = {
  key: SLICE_KEY.ROOT,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [SLICE_KEY.GLOBAL]: persistReducer(globalPersistConfig, globalSlice.reducer),
  [SLICE_KEY.PROFILE]: persistReducer(
    profilePersistConfig,
    profileSlice.reducer,
  ),
  [SLICE_KEY.EXPENSES]: persistReducer(
    expensesPersistConfig,
    expensesSlice.reducer,
  ),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefMidWare =>
    getDefMidWare({
      immutableCheck: true,
      serializableCheck: false, // NOTE: maintainers didn't want to handle 'redux-persist' case, so we turn it off
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
