import BreadCrumbs from "@components/BreadCrumbs"

const ArrowBreadCrumb = () => {
  return (
    // Arrow Bread Crumbs
    <BreadCrumbs
      type="chevron"
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

export default ArrowBreadCrumb
