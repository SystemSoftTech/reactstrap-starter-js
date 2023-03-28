import BreadCrumbs from "@components/BreadCrumbs"

const DotBreadCrumb = () => {
  return (
    // Dot BreadCrumb
    <BreadCrumbs
      type="dots"
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

export default DotBreadCrumb
