import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: 0
}

const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        updateProgress: (state,action) => {
            const progress = action.payload.progress;
            state.data = progress
        }
    }
})

export const {updateProgress} = progressSlice.actions
export default progressSlice.reducer