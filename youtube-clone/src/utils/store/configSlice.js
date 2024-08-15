import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
  },
});

export default configSlice.reducer;
export const { toggleMenu, closeMenu } = configSlice.actions;
