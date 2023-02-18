import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",

  initialState: {
    IsmenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.IsmenuOpen = !state.IsmenuOpen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
