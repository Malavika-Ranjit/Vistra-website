import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    progress: 0,
    totalThreats: 0,
    low:0,
    medium:0,
    high:0
}

const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        updateProgress: (state,action) => {
            const progress = action.payload.progress;
            state.progress = progress
        },
        updateReport: (state,action) => {
            state.totalThreats = action.payload.totalThreats;
            state.low = action.payload.low;
            state.medium = action.payload.medium;
            state.high = action.payload.high;
        }

    }
})

export const {updateProgress,updateReport} = progressSlice.actions
export default progressSlice.reducer