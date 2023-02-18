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

    closeMenu: (state) => {
      state.IsmenuOpen = false;
    },

    OpenMenu: (state) => {
      state.IsmenuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, OpenMenu } = appSlice.actions;
export default appSlice.reducer;
