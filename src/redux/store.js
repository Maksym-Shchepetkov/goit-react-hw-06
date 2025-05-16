import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'filteredContacts',
  version: 1,
  storage,
};

const contactConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, filterReducer);
const persistContactReducer = persistReducer(contactConfig, contactReducer);

export const store = configureStore({
  reducer: { contacts: persistContactReducer, filters: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
