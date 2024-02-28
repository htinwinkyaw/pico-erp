import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";

import { SidebarItemType } from "../_types/sidebar";

export const sidebar: SidebarItemType[] = [
  {
    menuName: "Home",
    menuIcon: HiOutlineHome,
    childMenus: [{ menuName: "Dashboard", link: "/" }],
  },
  {
    menuName: "User Management",
    menuIcon: HiOutlineUser,
    childMenus: [
      {
        menuName: "Users",
        childMenus: [
          { menuName: "User List", link: "/users" },
          { menuName: "Add User", link: "/users/create" },
        ],
      },
      {
        menuName: "Roles",
        childMenus: [
          { menuName: "Role List", link: "/roles" },
          { menuName: "Add Role", link: "/roles/create" },
        ],
      },
    ],
  },
];
