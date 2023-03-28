// ** Custom Components
import AvatarGroup from '@components/AvatarGroup'

// ** Images
import react from '@assets/images/portrait/small/avatar-s-11.jpg'
import vuejs from '@assets/images/portrait/small/avatar-s-20.jpg'

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Lilian',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Alberto',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Bruce',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Diana',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Rey',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'James',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Lee',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Mario',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Oswald',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Christie',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Barnes',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Arthur',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableBasic = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Project</th>
          <th>Client</th>
          <th>Users</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className='me-75' src={vuejs} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'>Angular Project</span>
          </td>
          <td>Peter Charles</td>
          <td>
            <AvatarGroup data={avatarGroupData1} />
          </td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={react} alt='react' height='20' width='20' />
            <span className='align-middle fw-bold'>React Project</span>
          </td>
          <td>Ronald Frest</td>
          <td>
            <AvatarGroup data={avatarGroupData2} />
          </td>
          <td>
            <Badge pill color='light-success' className='me-1'>
              Completed
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={vuejs} alt='vuejs' height='20' width='20' />
            <span className='align-middle fw-bold'>Vuejs Project</span>
          </td>
          <td>Jack Obes</td>
          <td>
            <AvatarGroup data={avatarGroupData3} />
          </td>
          <td>
            <Badge pill color='light-info' className='me-1'>
              Scheduled
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={react} alt='bootstrap' height='20' width='20' />
            <span className='align-middle fw-bold'>Bootstrap Project</span>
          </td>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData4} />
          </td>
          <td>
            <Badge pill color='light-warning' className='me-1'>
              Pending
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableBasic
