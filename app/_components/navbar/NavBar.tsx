import { HiOutlineMenuAlt1 } from "react-icons/hi";
import IconButton from "../ui/IconButton";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5 p-4">
        <IconButton icon={HiOutlineMenuAlt1} />
        <Link href="/">PICO SBS</Link>
      </div>
    </nav>
  );
};

export default NavBar;
