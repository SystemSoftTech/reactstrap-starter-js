import { Circle, PieChart } from "react-feather"

export default [
  {
    header: "Charts"
  },
  {
    id: "apexchart",
    title: "Charts",
    icon: <PieChart size={20} />,
    children: [
      {
        id: "apexchart",
        title: "ApexChart",
        icon: <Circle size={12} />,
        navLink: "/apexchart"
      },
      {
        id: "chartjs",
        title: "ChartJs",
        icon: <Circle size={12} />,
        navLink: "/chartjs"
      },
      {
        id: "rechart",
        title: "ReChart",
        icon: <Circle size={12} />,
        navLink: "/rechart"
      }
    ]
  }
]
