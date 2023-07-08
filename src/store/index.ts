import {combineReducers, configureStore} from '@reduxjs/toolkit';
import general from './general/reducer';
import { MMKV } from "react-native-mmkv"
import {persistStore, persistReducer} from 'redux-persist';

import { Storage } from "redux-persist";

const storage = new MMKV();

const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    storage.delete(key);
    return Promise.resolve();
  },
};



const reducers = combineReducers({
  general,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logout/fulfilled') {
    const {general} = state;
    state = {
      general,
    };
  }
  return reducers(state, action);
};

interface persistConfigModule {
  key: 'root',
  storage: any,
  whitelist: ['general', 'auth'],
}

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['general', 'auth'],
};
const persistedReducer = persistReducer(persistConfig as persistConfigModule , rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export * from './general/reducer';
