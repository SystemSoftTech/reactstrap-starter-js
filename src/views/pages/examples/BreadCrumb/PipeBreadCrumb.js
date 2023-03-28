import BreadCrumbs from "@components/BreadCrumbs"

const PipeBreadCrumb = () => {
  return (
    <BreadCrumbs
      type="pipes"
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

export default PipeBreadCrumb
