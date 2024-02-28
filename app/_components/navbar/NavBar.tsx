"use client";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import IconButton from "../ui/IconButton";
import Link from "next/link";
import React from "react";
import { sidebarActions } from "@/app/_store/slices/sidebarSlice";
import { useAppDispatch } from "@/app/_store/hook";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const toggleSidebarMenu = () => {
    dispatch(sidebarActions.toggleMenu());
  };
  return (
    <nav className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5 p-4">
        <IconButton icon={HiOutlineMenuAlt1} onClick={toggleSidebarMenu} />
        <Link href="/">PICO SBS</Link>
      </div>
    </nav>
  );
};

export default NavBar;
