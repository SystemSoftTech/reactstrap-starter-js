import BreadCrumbs from "@components/BreadCrumbs"

const DashBreadCrumb = () => {
  // Dash Bread Crumb
  return (
    <BreadCrumbs
      type="dashes"
      list={[
        {
          name: "Home",
          isLink: true,
          link: "/dashboard"
        },
        {
          name: "Components",
          isLink: true,
          link: "/dashboard"
        },
        {
          name: "Bread Crumbs",
          isLink: false
        }
      ]}
    ></BreadCrumbs>
  )
}

export default DashBreadCrumb
