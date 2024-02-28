import { useAppDispatch, useAppSelector } from "@/app/_store/hook";

import React from "react";
import SidebarItem from "./SidebarItem";
import { sidebar as menus } from "@/app/_constants/sidebar";
import { sidebarActions } from "@/app/_store/slices/sidebarSlice";

const SidebarItemList = () => {
  const expanded = useAppSelector((state) => state.sidebar.expanded);
  const activeMenu = useAppSelector((state) => state.sidebar.activeMenu);
  const secondActiveMenu = useAppSelector(
    (state) => state.sidebar.secondActiveMenu
  );
  const dispatch = useAppDispatch();

  const handleFirstMenu = (menu: string) => {
    dispatch(sidebarActions.setActiveMenu(menu));
    dispatch(sidebarActions.setSecondActiveMenu(""));
  };

  const handleSecondMenu = (menu: string) => {
    dispatch(sidebarActions.setSecondActiveMenu(menu));
  };

  return (
    <ul className="flex flex-col">
      {/* FIRST MENU */}
      {menus.map((menu, index) => {
        return (
          <div key={index}>
            <SidebarItem menu={menu} onClick={handleFirstMenu} />

            {/* SECOND MENU */}
            {activeMenu === menu.menuName &&
              expanded &&
              menu.childMenus!.map((menu, index) => {
                return (
                  <div key={index}>
                    <SidebarItem menu={menu} onClick={handleSecondMenu} />

                    {/* THIRD MENU */}
                    {secondActiveMenu === menu.menuName &&
                      expanded &&
                      menu.childMenus?.map((menu, index) => {
                        return <SidebarItem key={index} menu={menu} />;
                      })}
                  </div>
                );
              })}
          </div>
        );
      })}
    </ul>
  );
};

export default SidebarItemList;
