import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./CreateSlices/UserSlice.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  user: UserSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
