import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    stateContacts: persistedContactsReducer,
    filter: '',
  },
});

export const persistor = persistStore(store);