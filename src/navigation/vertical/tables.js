import { Circle, Table } from "react-feather"

export default [
  {
    id: "table",
    title: "Tables",
    icon: <Table size={12} />,
    children: [
      {
        id: "bs-table",
        title: "BS Table",
        icon: <Circle size={12} />,
        // permissions: ['admin', 'editor'],
        navLink: "/table/bs-table"
      },
      {
        id: "data-table",
        title: "DataTable",
        icon: <Circle size={12} />,
        navLink: "/table/datatable"
      },
      {
        id: "bootstrap-data-table",
        title: "Bootstrap DataTable",
        icon: <Circle size={12} />,
        navLink: "/table/bootstrap-datatable"
      }
    ]
  }
]
