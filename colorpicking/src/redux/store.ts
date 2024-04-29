// configureStore.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FilamentReducer } from "./filamentsReducer";

// Combine all your reducers
const rootReducer = combineReducers({
  filaments: FilamentReducer,
});

// Configuration for Redux-persist
// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
