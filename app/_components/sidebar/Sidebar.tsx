"use client";

import { useAppDispatch, useAppSelector } from "@/app/_store/hook";

import React from "react";
import SidebarItemList from "./SidebarItemList";
import { sidebarActions } from "@/app/_store/slices/sidebarSlice";

const Sidebar = () => {
  const expanded = useAppSelector((state) => state.sidebar.expanded);
  const dispatch = useAppDispatch();

  const openMenu = () => {
    dispatch(sidebarActions.openMenu());
  };

  const closeMenu = () => {
    dispatch(sidebarActions.closeMenu());
  };

  return (
    <div
      className={`md:py-4 ${
        expanded
          ? "items-start w-80 bg-slate-500 text-white rounded-tr-lg pt-2 pr-2"
          : "items-center hidden md:block md:w-16"
      }`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <SidebarItemList />
    </div>
  );
};

export default Sidebar;
