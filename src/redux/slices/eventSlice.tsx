import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {state} from "sucrase/dist/types/parser/traverser/base";
import {stat} from "fs";
import {toast} from "@/components/ui/use-toast";

export const getEvents = createAsyncThunk('eventsList/getEvents', async () => {
    try {
        const response = await axios.get(
            'https://6512fc93b8c6ce52b39693b2.mockapi.io/events',
        );
        console.log('Events Data :-', response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
});
export const getEventDetails = createAsyncThunk(
    'eventsList/getEventDetails',
    async (id : any) => {
        try {
            const response = await axios.get(
                'https://6512fc93b8c6ce52b39693b2.mockapi.io/events/' + id,
            );
            console.log('Events Data :-', response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
);
export const deleteSingleEvent = createAsyncThunk(
    'eventsList/deleteEvent',
    async (id : any) => {
        try {
            const response = await axios.delete(
                'https://6512fc93b8c6ce52b39693b2.mockapi.io/events/' + id,
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
);
const initialState = {
    events: [],
    singleEvent: {},
    isLoading: false,
    hasError: false,
};
const eventSlice = createSlice({
    name: 'eventList',
    initialState,
    reducers : {
    },
    extraReducers: builder => {
        builder
            .addCase(getEvents.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.events = action.payload;
                state.isLoading = false;
                state.hasError = false;

            })
            .addCase(getEvents.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                toast({
                    title: "Something went wrong",
                    description: "Please try again later",
                    className: "bg-red-500 text-white",
                    duration:3000
                })
            })
            .addCase(getEventDetails.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(getEventDetails.fulfilled, (state, action) => {
                state.singleEvent = action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(getEventDetails.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                toast({
                    title: "Something went wrong",
                    description: "Please try again later",
                    className: "bg-red-500 text-white",
                    duration:3000
                })
            })        .addCase(deleteSingleEvent.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
            .addCase(deleteSingleEvent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                toast({
                    title: "Success",
                    description: "Record has been deleted",
                    className: "bg-green-500 text-white",
                    duration:3000
                })
            })
            .addCase(deleteSingleEvent.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                toast({
                    title: "Something went wrong",
                    description: "Please try again later",
                    className: "bg-red-500 text-white",
                    duration:3000
                })
            });
    }
});

// Selectors
export const selectEvents = (state: { eventList: { events: any; }; }) => state.eventList.events;
export const selectSingleEvent = (state: { eventList: { singleEvent: any; }; }) => state.eventList.singleEvent;
export const selectLoadingState = (state: { eventList: { isLoading: any; }; }) => state.eventList.isLoading;
export const selectErrorState = (state: { eventList: { hasError: any; }; }) => state.eventList.hasError;
export default eventSlice.reducer;
