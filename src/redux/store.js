import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { favoritesReducer } from "./favorites/slice";
import { advertReducer } from "./advert/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const ignoredPersistenceActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
];

const rootReducer = combineReducers({
  favorites: persistReducer(persistConfig, favoritesReducer),
  adverts: advertReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ignoredPersistenceActions,
      },
    }),
});

export const persistor = persistStore(store);
