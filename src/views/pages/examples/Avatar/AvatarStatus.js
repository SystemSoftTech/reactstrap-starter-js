// ** Custom Components
import Avatar from "@components/Avatar"

// ** Icons Imports
import { GitHub } from "react-feather"

// ** Avatar Image
import avatarImg from "@src/assets/images/avatars/avatar-blank.png"

const AvatarStatus = () => {
  return (
    <div className="demo-inline-spacing">
      <Avatar img={avatarImg} status="offline" />
      <Avatar color="info" content="LD" status="busy" />
      <Avatar color="light-primary" icon={<GitHub size={14} />} status="away" />
      <Avatar color="light-success" content="AB" status="online" />
    </div>
  )
}
export default AvatarStatus
