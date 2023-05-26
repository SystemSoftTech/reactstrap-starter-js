import { Home, Briefcase, Circle, Calendar } from "react-feather"

export default [
  {
    header: "Apps & Pages"
  },
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: "components",
    title: "Components",
    icon: <Briefcase size={20} />,
    // badge: 'light-warning',
    // badgeText: '2',
    children: [
      {
        id: "accordion",
        title: "Accordion",
        icon: <Circle size={12} />,
        navLink: "/accordion"
      },
      {
        id: "alert",
        title: "Alerts",
        icon: <Circle size={12} />,
        navLink: "/alert"
      },
      {
        id: "avatar",
        title: "Avatar",
        icon: <Circle size={12} />,
        navLink: "/avatar"
      },
      {
        id: "button",
        title: "Buttons",
        icon: <Circle size={12} />,
        navLink: "/button"
      },
      {
        id: "breadcrumb",
        title: "Breadcrumb",
        icon: <Circle size={12} />,
        navLink: "/breadcrumb"
      },
      {
        id: "collapse",
        title: "Collapse",
        icon: <Circle size={12} />,
        navLink: "/collapse"
      },
      {
        id: "dropdowns",
        title: "Dropdowns",
        icon: <Circle size={20} />,
        navLink: "/dropdowns"
      },
      {
        id: "modal",
        title: "Modal",
        icon: <Circle size={12} />,
        navLink: "/modal"
      },
      {
        id: "pagination",
        title: "Pagination",
        icon: <Circle size={12} />,
        navLink: "/pagination"
      },
      {
        id: "pills",
        title: "Pills",
        icon: <Circle size={12} />,
        navLink: "/pills"
      },
      {
        id: "popover",
        title: "Popover",
        icon: <Circle size={12} />,
        navLink: "/popover"
      },
      {
        id: "progress",
        title: "Progress",
        icon: <Circle size={12} />,
        navLink: "/progress"
      },
      {
        id: "spinner",
        title: "Spinner",
        icon: <Circle size={12} />,
        navLink: "/spinner"
      },
      {
        id: "sweet-alert",
        title: "Sweet Alert",
        icon: <Circle size={12} />,
        navLink: "/sweet-alert"
      },
      {
        id: "typography",
        title: "Typography",
        icon: <Circle size={12} />,
        navLink: "/typography"
      },
      {
        id: "tooltip",
        title: "Tooltip",
        icon: <Circle size={12} />,
        navLink: "/tooltip"
      },
      {
        id: "toaster",
        title: "Toaster",
        icon: <Circle size={12} />,
        navLink: "/toaster"
      },
      {
        id: "toasts",
        title: "Toasts",
        icon: <Circle size={12} />,
        navLink: "/toasts"
      },
      {
        id: "tabs",
        title: "Tabs",
        icon: <Circle size={12} />,
        navLink: "/tabs"
      },
      {
        id: "react-hot-toasts",
        title: "React Hot Toasts",
        icon: <Circle size={12} />,
        navLink: "/react-hot-toasts"
      }
    ]
  },
  {
    id: "calendar",
    title: "Calender",
    icon: <Calendar size={20} />,
    navLink: "/calendar"
  }
]
