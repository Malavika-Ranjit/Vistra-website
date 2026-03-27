import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {

}

const reportSlice = createSlice({
    name:"report",
    initialState,
    reducers: {
        updateFullReport: (state,action) => {

        },
    }
})


export const deleteFile = createAsyncThunk(
  "scan/sendScanData",
  async ({ scanId = "hahaha", fileName = "nah uh", filePath = "broo"}, thunkAPI) => {
    try {
        console.log("NAH UH")
        const deviceId = "470a47234101453c97a2bf21a1ce62c4"
        const response = await axios.post("http://127.0.0.1:8000/deleteFile", {
            deviceId: deviceId,
            scanId: scanId,
            fileName: fileName,
            filePath: filePath
        });

        return response.data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(
            error.response?.data || error.message
        );
    }
  }
);
export const keepFile = createAsyncThunk(
  "scan/sendScanData",
  async ({ scanId = "hahaha", fileName = "nah uh", filePath = "broo"}, thunkAPI) => {
    try {
        console.log("NAH UH")
        const deviceId = "470a47234101453c97a2bf21a1ce62c4"
        const response = await axios.post("http://127.0.0.1:8000/keepFile", {
            deviceId: deviceId,
            scanId: scanId,
            fileName: fileName,
            filePath: filePath
        });

        return response.data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(
            error.response?.data || error.message
        );
    }
  }
);