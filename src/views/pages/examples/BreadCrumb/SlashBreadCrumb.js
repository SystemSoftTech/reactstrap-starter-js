import BreadCrumbs from "@components/BreadCrumbs"

const SlashBreadCrumb = () => {
  return (
    // Slash BreadCrumb
    <BreadCrumbs
      type="slash"
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

export default SlashBreadCrumb
