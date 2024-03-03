export const roles = [
  {
    id: 1,
    role: "adminstrator",
    features: {
      permissions: [
        { user: ["Create", "Retrieve", "Update", "Delete", "Export"] },
        { role: ["Create", "Retrieve", "Update", "Delete", "Export"] },
        { products: ["Create", "Retrieve", "Update", "Delete", "Export"] },
      ],
    },
  },
  {
    id: 2,
    role: "user",
    features: {
      permissions: [
        { user: ["Retrieve", "Export"] },
        { role: ["Retrieve"] },
        { products: ["Retrieve", "Export"] },
      ],
    },
  },
  {
    id: 3,
    role: "accountant",
    features: {
      permissions: [
        { user: ["View", "Retrieve", "Update", "Delete", "Export"] },
        { role: ["View", "Retrieve", "Update", "Delete", "Export"] },
        { products: ["View", "Retrieve", "Update", "Delete", "Export"] },
      ],
    },
  },
];
