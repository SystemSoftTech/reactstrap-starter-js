// ** React Imports
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/Avatar'

// ** Utils
// import { isUserLoggedIn } from '@utils'

// ** Third Party Components
import { Power } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import { isUserLoggedIn } from '@utils'

const UserDropdown = () => {
  // ** State
  const [userData, setUserData] = useState(null)
  const history = useHistory()

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userDetails')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar

  const Logout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("FullName")
    localStorage.removeItem("Email")
    localStorage.removeItem("userDetails")
    history.push("/login")
  }

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name fw-bold'>{(userData && userData['FullName']) || 'Demo User'}</span>
          <span className='user-status'>{(userData && userData.role) || 'Role'}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu end>
        {/* <DropdownItem tag='a' href='/pages/profile' onClick={e => e.preventDefault()}>
          <User size={14} className='me-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
        <DropdownItem tag='a' href='/apps/email' onClick={e => e.preventDefault()}>
          <Mail size={14} className='me-75' />
          <span className='align-middle'>Inbox</span>
        </DropdownItem>
        <DropdownItem tag='a' href='/apps/todo' onClick={e => e.preventDefault()}>
          <CheckSquare size={14} className='me-75' />
          <span className='align-middle'>Tasks</span>
        </DropdownItem>
        <DropdownItem tag='a' href='/apps/chat' onClick={e => e.preventDefault()}>
          <MessageSquare size={14} className='me-75' />
          <span className='align-middle'>Chats</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag='a' href='/pages/account-settings' onClick={e => e.preventDefault()}>
          <Settings size={14} className='me-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
        <DropdownItem tag='a' href='/pages/pricing' onClick={e => e.preventDefault()}>
          <CreditCard size={14} className='me-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem>
        <DropdownItem tag='a' href='/pages/faq' onClick={e => e.preventDefault()}>
          <HelpCircle size={14} className='me-75' />
          <span className='align-middle'>FAQ</span>
        </DropdownItem> */}
        <DropdownItem onClick={Logout} className='w-100'>
          <Power size={14} className='me-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
