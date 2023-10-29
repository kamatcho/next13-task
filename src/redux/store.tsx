import {configureStore , combineReducers} from '@reduxjs/toolkit';
import eventSlice from './slices/eventSlice';
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    eventList: eventSlice,
},);

 const store = configureStore({
    reducer:rootReducer,
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store


