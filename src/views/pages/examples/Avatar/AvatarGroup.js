// ** Custom Components
import AvatarGroup from "@components/AvatarGroup"

const data = [
  {
    img: require("@src/assets/images/avatars/avatar-blank.png").default
  },
  {
    img: require("@src/assets/images/avatars/avatar-blank.png").default
  },
  {
    img: require("@src/assets/images/avatars/avatar-blank.png").default
  },
  {
    img: require("@src/assets/images/avatars/avatar-blank.png").default
  },
  {
    img: require("@src/assets/images/avatars/avatar-blank.png").default
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
