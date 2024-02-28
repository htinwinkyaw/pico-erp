import { createSlice } from "@reduxjs/toolkit";

type initialSidbarStateType = {
  expanded: boolean;
  activeMenu: string;
  secondActiveMenu: string;
  currentMenu: string;
};

const initialState: initialSidbarStateType = {
  expanded: false,
  activeMenu: "",
  secondActiveMenu: "",
  currentMenu: "Home",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.expanded = !state.expanded;
    },
    openMenu(state) {
      state.expanded = true;
    },
    closeMenu(state) {
      state.expanded = false;
    },
    setCurrentMenu(state, action) {
      state.currentMenu = action.payload;
    },
    setActiveMenu(state, action) {
      state.activeMenu = action.payload;
    },
    setSecondActiveMenu(state, action) {
      state.secondActiveMenu = action.payload;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;
export default sidebarSlice;
