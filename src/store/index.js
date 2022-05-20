import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import linkReducer from './slice/LinkSlice';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    links: linkReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        serializableCheck: {
            ignoreActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ]
        }
    })
})

export const persistor = persistStore(store)