import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";

import { SidebarItemType } from "../_types/sidebar.type";

export const sidebar: SidebarItemType[] = [
  {
    menuName: "Home",
    menuIcon: HiOutlineHome,
    layer: 1,
    childMenus: [{ menuName: "Dashboard", layer: 2, link: "/" }],
  },
  {
    menuName: "User Management",
    menuIcon: HiOutlineUser,
    layer: 1,
    childMenus: [
      {
        menuName: "Users",
        layer: 2,
        childMenus: [
          { menuName: "User List", layer: 3, link: "/users" },
          { menuName: "Add User", layer: 3, link: "/users/create" },
        ],
      },
      {
        menuName: "Roles",
        layer: 2,
        childMenus: [
          { menuName: "Role List", layer: 3, link: "/roles" },
          { menuName: "Add Role", layer: 3, link: "/roles/create" },
        ],
      },
    ],
  },
];
