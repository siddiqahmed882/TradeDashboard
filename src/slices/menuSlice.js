import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: true,
  isMobileMenu : true
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setOpenMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    handleMobileMenu: (state, action) => {
      state.isMobileMenu = action.payload;
    },
  },
});

export const { setOpenMenu, handleMobileMenu } = menuSlice.actions;

export default menuSlice.reducer;
