import { IconType } from "react-icons";

export type SidebarItemType = {
  menuName: string;
  menuIcon?: IconType;
  layer: number;
  link?: string;
  childMenus?: SidebarItemType[];
};
