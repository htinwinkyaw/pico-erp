import { IconType } from "react-icons";

export type SidebarItemType = {
  menuName: string;
  menuIcon?: IconType;
  link?: string;
  childMenus?: SidebarItemType[];
};
