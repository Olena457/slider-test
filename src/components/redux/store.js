// const store = configureStore({
//   reducer: {
//     items: itemsReducer,
//     itemForm: itemFormReducer,
//   },
// });

// export default store;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import itemsReducer from './slices/itemSlice';
import itemFormReducer from './slices/itemFormSlice';

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

const rootReducer = combineReducers({
  items: itemsReducer,
  itemForm: itemFormReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
