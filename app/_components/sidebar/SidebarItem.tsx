"use client";

import { useAppDispatch, useAppSelector } from "@/app/_store/hook";

import { HiChevronUp } from "react-icons/hi";
import React from "react";
import { SidebarItemType } from "@/app/_types/sidebar.type";
import { sidebarActions } from "@/app/_store/slices/sidebarSlice";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  menu: SidebarItemType;
  layer: number;
  onClick?: (menu: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ menu, layer, onClick }) => {
  const { menuName: name, menuIcon: Icon, link, childMenus } = menu;
  const router = useRouter();

  const expanded = useAppSelector((state) => state.sidebar.expanded);
  const currentMenu = useAppSelector((state) => state.sidebar.currentMenu);
  const activeMenu = useAppSelector((state) => state.sidebar.activeMenu);
  const secondActiveMenu = useAppSelector(
    (state) => state.sidebar.secondActiveMenu
  );
  const dispatch = useAppDispatch();

  const handleLinkPush = (link: string) => {
    dispatch(sidebarActions.setCurrentMenu(activeMenu));
    dispatch(sidebarActions.toggleMenu());
    router.push(link);
  };

  return (
    <li
      className={`flex flex-row items-center justify-between 
        ${layer === 1 ? "pl-4" : layer === 2 ? "pl-8" : "pl-12"}
        pr-4 py-2 cursor-pointer 
        hover:bg-slate-300 hover:rounded-r-full
        ${currentMenu === name && "font-bold bg-slate-300 rounded-r-full"}
      `}
      onClick={
        link
          ? handleLinkPush.bind(null, link)
          : onClick && onClick.bind(null, name)
      }
    >
      <div className="flex flex-row items-center gap-5">
        {Icon && <Icon size={24} />}
        {expanded && <span>{name}</span>}
      </div>
      <div>
        {expanded && childMenus && (
          <HiChevronUp
            size={16}
            className={`${
              (activeMenu === name || secondActiveMenu === name) && "rotate-180"
            }`}
          />
        )}
      </div>
    </li>
  );
};

export default SidebarItem;
