import { Circle, Copy, Grid, Layout } from "react-feather"

export default [
  {
    header: "FORMS & TABLES"
  },
  {
    id: 'formElements',
    title: 'Form Elements',
    icon: <Copy size={20} />,
    children: [
      {
        id: 'input',
        title: 'Input',
        icon: <Circle size={12} />,
        navLink: '/elements/input'
      },
      {
        id: 'inputGroup',
        title: 'Input Groups',
        icon: <Circle size={12} />,
        navLink: '/elements/input-group'
      },
      {
        id: 'inputMask',
        title: 'Input Mask',
        icon: <Circle size={12} />,
        navLink: '/elements/input-mask'
      },
      {
        id: 'textarea',
        title: 'Textarea',
        icon: <Circle size={12} />,
        navLink: '/elements/textarea'
      },
      {
        id: 'checkbox',
        title: 'Checkbox',
        icon: <Circle size={12} />,
        navLink: '/elements/checkbox'
      },
      {
        id: 'radio',
        title: 'Radio',
        icon: <Circle size={12} />,
        navLink: '/elements/radio'
      },
      {
        id: 'switch',
        title: 'Switch',
        icon: <Circle size={12} />,
        navLink: '/elements/switch'
      },
      {
        id: 'select',
        title: 'Select',
        icon: <Circle size={12} />,
        navLink: '/elements/select'
      },
      {
        id: 'numberInput',
        title: 'Number Input',
        icon: <Circle size={12} />,
        navLink: '/elements/number-input'
      },
      {
        id: 'fileUploader',
        title: 'File Uploader',
        icon: <Circle size={12} />,
        navLink: '/elements/file-uploader'
      },
      {
        id: 'quillEditor',
        title: 'Editor',
        icon: <Circle size={12} />,
        navLink: '/elements/editor'
      },
      {
        id: 'date_&_timePicker',
        title: 'Date & Time Picker',
        icon: <Circle size={12} />,
        navLink: '/elements/pickers'
      }
    ]
  },
  {
    id: "form-wizard",
    title: "Form Wizard",
    icon: <Grid size={20} />,
    navLink: "/form-wizard"
  },
  {
    id: "forms",
    title: "Forms",
    icon: <Layout size={12} />,
    children: [
      {
        id: "form-layouts",
        title: "Form Layouts",
        icon: <Circle size={12} />,
        // permissions: ['admin', 'editor'],
        navLink: "/forms/form-layouts"
      },
      // {
      //   id: "form-control",
      //   title: "Form Control",
      //   icon: <Circle size={12} />,
      //   navLink: "/forms/form-control"
      // },
      {
        id: "react-hook-form",
        title: "React Hook Form",
        icon: <Circle size={12} />,
        navLink: "/forms/react-hook-form"
      },
      {
        id: "react-hook-form-icon",
        title: "React Hook Form Icon",
        icon: <Circle size={12} />,
        navLink: "/forms/react-hook-form-icon"
      },
      {
        id: "react-hook-form-floating",
        title: "React Hook Form Floating",
        icon: <Circle size={12} />,
        navLink: "/forms/react-hook-form-floating"
      }
    ]
  }
]
