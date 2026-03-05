import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const scansSlice = createSlice({
  name: "scans",
  initialState,
  reducers: {
 
    addScan: (state, action) => {
      const { scan_id, user_id, device_id, scan_type, started_at, completed_at, status } = action.payload;
      const scanArray = [scan_id, user_id, device_id, scan_type, started_at, completed_at, status];
      state.push(scanArray);

      console.log("After ADD (2D Array in Slice):", JSON.stringify(state, null, 2));
    },

    
    updateScan: (state, action) => {
      const { scan_id, user_id, device_id, scan_type, started_at, completed_at, status } = action.payload;
      const index = state.findIndex(scan => scan[0] === scan_id); // scan_id is first element

      if (index !== -1) {
        state[index] = [scan_id, user_id, device_id, scan_type, started_at, completed_at, status];
      }

      console.log("After UPDATE (2D Array in Slice):", JSON.stringify(state, null, 2));
    },

   
    deleteScan: (state, action) => {
      const scan_id = action.payload;
      const index = state.findIndex(scan => scan[0] === scan_id);

      if (index !== -1) {
        state.splice(index, 1);
      }

      console.log("After DELETE (2D Array in Slice):", JSON.stringify(state, null, 2));
    },
  },
});

export const { addScan, updateScan, deleteScan } = scansSlice.actions;
export default scansSlice.reducer;