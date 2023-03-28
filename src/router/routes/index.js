import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Demo'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home')),
    exact: true
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/alert',
    component: lazy(() => import('../../views/pages/examples/Alert'))
  },
  {
    path: '/button',
    component: lazy(() => import('../../views/pages/examples/Button'))
  },
  {
    path: '/avatar',
    component: lazy(() => import('../../views/pages/examples/Avatar'))
  },
  {
    path: '/breadcrumb',
    component: lazy(() => import('../../views/pages/examples/BreadCrumb'))
  },
  {
    path: '/collapse',
    component: lazy(() => import('../../views/pages/examples/Collapse'))
  },
  {
    path: '/modal',
    component: lazy(() => import('../../views/pages/examples/Modal'))
  },
  {
    path: '/pagination',
    component: lazy(() => import('../../views/pages/examples/Paginate'))
  },
  {
    path: '/pills',
    component: lazy(() => import('../../views/pages/examples/Pills'))
  },
  {
    path: '/popover',
    component: lazy(() => import('../../views/pages/examples/Popovers'))
  },
  {
    path: '/progress',
    component: lazy(() => import('../../views/pages/examples/Progress'))
  },
  {
    path: '/spinner',
    component: lazy(() => import('../../views/pages/examples/Spinners'))
  },
  {
    path: '/sweet-alert',
    component: lazy(() => import('../../views/pages/examples/SweetAlert'))
  },
  {
    path: '/typography',
    component: lazy(() => import('../../views/pages/examples/Typography'))
  },
  {
    path: '/tooltip',
    component: lazy(() => import('../../views/pages/examples/Tooltips'))
  },
  {
    path: '/toaster',
    component: lazy(() => import('../../views/pages/examples/Toaster'))
  },
  {
    path: '/toasts',
    component: lazy(() => import('../../views/pages/examples/Toasts'))
  },
  {
    path: '/tabs',
    component: lazy(() => import('../../views/pages/examples/Tabs'))
  },
  {
    path: '/accordion',
    component: lazy(() => import('../../views/pages/examples/Accordion'))
  },
  {
    path: '/react-hot-toasts',
    component: lazy(() => import('../../views/pages/examples/ReactHotToasts'))
  },
  {
    path: '/forms/react-hook-form',
    component: lazy(() => import('../../views/pages/examples/Form/FormHook'))
  },
  {
    path: '/forms/react-hook-form-icon',
    component: lazy(() => import('../../views/pages/examples/Form/HookFormIcon'))
  },
  {
    path: '/forms/react-hook-form-floating',
    component: lazy(() => import('../../views/pages/examples/Form/FormHookFloating'))
  },
  {
    path: '/forms/form-layouts',
    component: lazy(() => import('../../views/pages/examples/Form/FormLayouts'))
  },
  {
    path: '/forms/form-control',
    component: lazy(() => import('../../views/pages/examples/Form/FormControl'))
  },
  {
    path: '/table/bs-table',
    component: lazy(() => import('../../views/pages/examples/Table'))
  },
  {
    path: '/table/datatable',
    component: lazy(() => import('../../views/pages/examples/DataTable'))
  },
  {
    path: '/form-wizard',
    component: lazy(() => import('../../views/pages/examples/Wizard'))
  },
  {
    path: '/timeline',
    component: lazy(() => import('../../views/pages/examples/Timeline'))
  },
  {
    path: '/dropdowns',
    component: lazy(() => import('../../views/pages/examples/Dropdowns'))
  },
  {
    path: '/file-uploader',
    component: lazy(() => import('../../views/pages/examples/FileUploader'))
  },
  {
    path: '/calendar',
    component: lazy(() => import('../../views/pages/examples/Calendar'))
  },
  {
    path: '/table/bootstrap-datatable',
    component: lazy(() => import('../../views/pages/examples/ReactBootstrapTable'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/pages/auth/LoginBasic')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/pages/auth/RegisterBasic')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/forget-password',
    component: lazy(() => import('../../views/pages/auth/ForgotPasswordBasic')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/reset-password',
    component: lazy(() => import('../../views/pages/auth/ResetPasswordBasic')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/verify-email',
    component: lazy(() => import('../../views/pages/auth/VerifyEmailBasic')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
