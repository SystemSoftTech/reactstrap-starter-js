import { Home, Briefcase, Circle, Server, Layout, Grid, Upload, List, Table, Calendar, PieChart } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'components',
    title: 'Components',
    icon: <Briefcase size={20} />,
    // badge: 'light-warning',
    // badgeText: '2',
    children: [
      {
        id: 'accordion',
        title: 'Accordion',
        // icon: <Circle size={12} />,
        navLink: '/accordion'
      },
      {
        id: 'alert',
        title: 'Alerts',
        // icon: <Circle size={12} />,
        navLink: '/alert'
      },
      {
        id: 'avatar',
        title: 'Avatar',
        // icon: <Circle size={12} />,
        navLink: '/avatar'
      },
      {
        id: 'button',
        title: 'Buttons',
        // icon: <Circle size={12} />,
        navLink: '/button'
      },
      {
        id: 'breadcrumb',
        title: 'Breadcrumb',
        // icon: <Circle size={12} />,
        navLink: '/breadcrumb'
      },
      {
        id: 'collapse',
        title: 'Collapse',
        // icon: <Circle size={12} />,
        navLink: '/collapse'
      },
      {
        id: 'dropdowns',
        title: 'Dropdowns',
        // icon: <Circle size={20} />,
        navLink: '/dropdowns'
      },
      {
        id: 'modal',
        title: 'Modal',
        // icon: <Circle size={12} />,
        navLink: '/modal'
      },
      {
        id: 'pagination',
        title: 'Pagination',
        // icon: <Circle size={12} />,
        navLink: '/pagination'
      },
      {
        id: 'pills',
        title: 'Pills',
        // icon: <Circle size={12} />,
        navLink: '/pills'
      },
      {
        id: 'popover',
        title: 'Popover',
        // icon: <Circle size={12} />,
        navLink: '/popover'
      },
      {
        id: 'progress',
        title: 'Progress',
        // icon: <Circle size={12} />,
        navLink: '/progress'
      },
      {
        id: 'spinner',
        title: 'Spinner',
        // icon: <Circle size={12} />,
        navLink: '/spinner'
      },
      {
        id: 'sweet-alert',
        title: 'Sweet Alert',
        // icon: <Circle size={12} />,
        navLink: '/sweet-alert'
      },
      {
        id: 'typography',
        title: 'Typography',
        // icon: <Circle size={12} />,
        navLink: '/typography'
      },
      {
        id: 'tooltip',
        title: 'Tooltip',
        // icon: <Circle size={12} />,
        navLink: '/tooltip'
      },
      {
        id: 'toaster',
        title: 'Toaster',
        // icon: <Circle size={12} />,
        navLink: '/toaster'
      },
      {
        id: 'toasts',
        title: 'Toasts',
        // icon: <Circle size={12} />,
        navLink: '/toasts'
      },
      {
        id: 'tabs',
        title: 'Tabs',
        // icon: <Circle size={12} />,
        navLink: '/tabs'
      },
      {
        id: 'react-hot-toasts',
        title: 'React Hot Toasts',
        // icon: <Circle size={12} />,
        navLink: '/react-hot-toasts'
      }
    ]
  },
  {
    id: 'apexchart',
    title: 'Charts',
    icon: <PieChart size={20} />,
    children: [
      {
        id: 'apexchart',
        title: 'ApexChart',
        // icon: <Circle size={12} />,
        navLink: '/apexchart'
      },
      {
        id: 'chartjs',
        title: 'ChartJs',
        // icon: <Circle size={12} />,
        navLink: '/chartjs'
      },
      {
        id: 'rechart',
        title: 'ReChart',
        // icon: <Circle size={12} />,
        navLink: '/rechart'
      }
    ]
  },
  {
    id: 'calendar',
    title: 'Calender',
    icon: <Calendar size={20} />,
    navLink: '/calendar'
  },
  {
    id: 'file-uploader',
    title: 'File Uploader',
    icon: <Upload size={20} />,
    navLink: '/file-uploader'
  },
  {
    id: "form-wizard",
    title: 'Form Wizard',
    icon: <Grid size={20} />,
    navLink: '/form-wizard'
  },
  {
    id: 'forms',
    title: "Forms",
    icon: <Layout size={12} />,
    children: [
      {
        id: 'form-layouts',
        title: 'Form Layouts',
        // icon: <Circle size={12} />,
        // permissions: ['admin', 'editor'],
        navLink: '/forms/form-layouts'
      },
      {
        id: 'form-control',
        title: 'Form Control',
        // icon: <Circle size={12} />,
        navLink: '/forms/form-control'
      },
      {
        id: 'react-hook-form',
        title: 'React Hook Form',
        // icon: <Circle size={12} />,
        navLink: '/forms/react-hook-form'
      },
      {
        id: 'react-hook-form-icon',
        title: 'React Hook Form Icon',
        // icon: <Circle size={12} />,
        navLink: '/forms/react-hook-form-icon'
      },
      {
        id: 'react-hook-form-floating',
        title: 'React Hook Form Floating',
        // icon: <Circle size={12} />,
        navLink: '/forms/react-hook-form-floating'
      }
    ]
  },
  {
    id: "timeline",
    title: 'Timeline',
    icon: <Server size={20} />,
    navLink: '/timeline'
  },
  {
    id: 'table',
    title: "Tables",
    icon: <Table size={12} />,
    children: [
      {
        id: 'bs-table',
        title: 'BS Table',
        // icon: <Circle size={12} />,
        // permissions: ['admin', 'editor'],
        navLink: '/table/bs-table'
      },
      {
        id: 'data-table',
        title: 'DataTable',
        // icon: <Circle size={12} />,
        navLink: '/table/datatable'
      },
      {
        id: 'bootstrap-data-table',
        title: 'Bootstrap DataTable',
        // icon: <Circle size={12} />,
        navLink: '/table/bootstrap-datatable'
      }
    ]
  }
]
