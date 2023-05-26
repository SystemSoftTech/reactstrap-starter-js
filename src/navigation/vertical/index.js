import { Server, Upload } from "react-feather"

import apps from "./apps"
import forms from "./forms"
import tables from "./tables"
import charts from "./charts"

const others = [
  {
    id: "timeline",
    title: "Timeline",
    icon: <Server size={20} />,
    navLink: "/timeline"
  }
]
export default [...apps, ...forms, ...others, ...tables, ...charts]
