"use client";

import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "@/app/_store/hook";

import IconButton from "../ui/IconButton";
import Link from "next/link";
import React from "react";
import { sidebarActions } from "@/app/_store/slices/sidebarSlice";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const expanded = useAppSelector((state) => state.sidebar.expanded);
  const toggleSidebarMenu = () => {
    dispatch(sidebarActions.toggleMenu());
  };
  return (
    <nav className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5 p-4">
        <IconButton
          icon={expanded ? HiX : HiOutlineMenuAlt1}
          onClick={toggleSidebarMenu}
        />
        <Link href="/">PICO SBS</Link>
      </div>
    </nav>
  );
};

export default NavBar;
