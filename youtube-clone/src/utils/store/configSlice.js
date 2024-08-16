import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isMenuOpen: true,
    isModalOpen: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
    enableModal: (state, action) => {
      state.isModalOpen = true;
    },
    disableModal: (state, action) => {
      state.isModalOpen = false;
    },
  },
});

export default configSlice.reducer;
export const { toggleMenu, closeMenu, enableModal, disableModal } =
  configSlice.actions;
