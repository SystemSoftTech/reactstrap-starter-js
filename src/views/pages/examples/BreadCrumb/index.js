import AppCard from "@components/Cards"
import ArrowBreadCrumb from "./ArrowBreadCrumb"
import DashBreadCrumb from "./DashBreadCrumb"
import DotBreadCrumb from "./DotBreadCrumb"
import PipeBreadCrumb from "./PipeBreadCrumb"
import SlashBreadCrumb from "./SlashBreadCrumb"

const BreadCrumb = () => {
  return (
    <AppCard title="Bread Crumbs">
      {/* Slash BreadCrumb */}
      <SlashBreadCrumb />

      {/* Dot BreadCrumb */}
      <DotBreadCrumb />

      {/* Dash BreadCrumb */}
      <DashBreadCrumb />

      {/* Pipe BreadCrumb */}
      <PipeBreadCrumb />

      {/* Arrow BreadCrumb */}
      <ArrowBreadCrumb />
    </AppCard>
  )
}

export default BreadCrumb
