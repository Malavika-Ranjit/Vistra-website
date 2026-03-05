import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
   
    addFile: (state, action) => {
      const { file_id, scan_id, file_path, file_hash, is_malicious, action: fileAction, action_time } = action.payload;
      const fileArray = [file_id, scan_id, file_path, file_hash, is_malicious, fileAction, action_time];
      state.push(fileArray);

      console.log("After ADD (2D Array in Slice):", JSON.stringify(state, null, 2));
    },

   
    updateFile: (state, action) => {
      const { file_id, scan_id, file_path, file_hash, is_malicious, action: fileAction, action_time } = action.payload;
      const index = state.findIndex(file => file[0] === file_id); // file_id is first

      if (index !== -1) {
        state[index] = [file_id, scan_id, file_path, file_hash, is_malicious, fileAction, action_time];
      }

      console.log("After UPDATE (2D Array in Slice):", JSON.stringify(state, null, 2));
    },

   
    deleteFile: (state, action) => {
      const file_id = action.payload;
      const index = state.findIndex(file => file[0] === file_id);

      if (index !== -1) {
        state.splice(index, 1);
      }

      console.log("After DELETE (2D Array in Slice):", JSON.stringify(state, null, 2));
    },
  },
});

export const { addFile, updateFile, deleteFile } = filesSlice.actions;
export default filesSlice.reducer;