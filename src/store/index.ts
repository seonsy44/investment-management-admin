import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { accountQuerySlice } from './accountQuerySlice';
import { headerTitleSlice } from './headerTitleSlice';
import { reLoginModalSlice } from './reLoginModalSlice';
import { userQuerySlice } from './userQuerySlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [accountQuerySlice.name]: accountQuerySlice.reducer,
  [userQuerySlice.name]: userQuerySlice.reducer,
  [headerTitleSlice.name]: headerTitleSlice.reducer,
  [reLoginModalSlice.name]: reLoginModalSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

// export const store = configureStore({
//   reducer: {
//     [accountQuerySlice.name]: accountQuerySlice.reducer,
//     [userQuerySlice.name]: userQuerySlice.reducer,
//     [headerTitleSlice.name]: headerTitleSlice.reducer,
//     [reLoginModalSlice.name]: reLoginModalSlice.reducer,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
// });
