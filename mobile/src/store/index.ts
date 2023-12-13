import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {profilePersistConfig, profileSlice} from './reducers/profile.ts';
import {appPersistConfig, appSlice} from './reducers/app.ts';
import {SLICE_KEY} from './consts.ts';

const rootPersistConfig = {
  key: SLICE_KEY.ROOT,
  storage: AsyncStorage,
  blacklist: Object.values(SLICE_KEY),
};

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, appSlice.reducer),
  profile: persistReducer(profilePersistConfig, profileSlice.reducer),
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
