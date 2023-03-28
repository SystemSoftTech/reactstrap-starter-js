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
    title: 'Illiana',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Wyatt',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Troy',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Mufutau',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Denton',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Carol',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Kyla',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Hop',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Yvonne',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Lunea',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Francis',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kameko',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData5 = [
  {
    title: 'Blair',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Aspen',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Tyler',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData6 = [
  {
    title: 'Florence',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kieran',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Anthony',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData7 = [
  {
    title: 'Lysandra',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Russell',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Curran',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData8 = [
  {
    title: 'Britanney',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Avye',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Castor',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData9 = [
  {
    title: 'Charissa',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Elijah',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Giacomo',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData10 = [
  {
    title: 'Chaim',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Virginia',
    img: vuejs,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Kristen',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableContextual = () => {
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
        <tr className='table-default'>
          <td>
            <img className='me-75' src={react} alt='figma' height='20' width='20' />
            <span className='align-middle fw-bold'>Figma Project</span>
          </td>
          <td>Ronnie Shane</td>
          <td>
            <AvatarGroup data={avatarGroupData1} />{' '}
          </td>
          <td>
            <Badge pill color='light-primary'>
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
        <tr className='table-active'>
          <td>
            <img className='me-75' src={react} alt='react' height='20' width='20' />
            <span className='align-middle fw-bold'>React Project</span>
          </td>
          <td>Ronald Frest</td>
          <td>
            <AvatarGroup data={avatarGroupData2} />
          </td>
          <td>
            <Badge pill color='light-success'>
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
        <tr className='table-primary'>
          <td>
            <img className='me-75' src={vuejs} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'>Angular Project</span>
          </td>
          <td>Peter Charls</td>
          <td>
            <AvatarGroup data={avatarGroupData3} />
          </td>
          <td>
            <Badge pill color='light-primary'>
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
        <tr className='table-secondary'>
          <td>
            <img className='me-75' src={vuejs} alt='vuejs' height='20' width='20' />
            <span className='align-middle fw-bold'>Vuejs Project</span>
          </td>
          <td>Jack Obes</td>
          <td>
            <AvatarGroup data={avatarGroupData4} />
          </td>
          <td>
            <Badge pill color='light-secondary'>
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
        <tr className='table-success'>
          <td>
            <img className='me-75' src={react} alt='bootstrap' height='20' width='20' />
            <span className='align-middle fw-bold'>Bootstrap Project</span>
          </td>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData5} />
          </td>
          <td>
            <Badge pill color='light-success'>
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
        <tr className='table-danger'>
          <td>
            <img className='me-75' src={react} alt='figma' height='20' width='20' />
            <span className='align-middle fw-bold'>Figma Project</span>
          </td>
          <td>Janne Ale</td>
          <td>
            <AvatarGroup data={avatarGroupData6} />
          </td>
          <td>
            <Badge pill color='light-danger'>
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
        <tr className='table-warning'>
          <td>
            <img className='me-75' src={react} alt='react' height='20' width='20' />
            <span className='align-middle fw-bold'>React Custom</span>
          </td>
          <td>Ted Richer</td>
          <td>
            <AvatarGroup data={avatarGroupData7} />
          </td>
          <td>
            <Badge pill color='light-warning'>
              Schedule
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
        <tr className='table-info'>
          <td>
            <img className='me-75' src={vuejs} alt='bootstrap' height='20' width='20' />
            <span className='align-middle fw-bold'>Latest Bootstrap</span>
          </td>
          <td>Perry Parker</td>
          <td>
            <AvatarGroup data={avatarGroupData8} />
          </td>
          <td>
            <Badge pill color='light-info'>
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
        <tr className='table-light'>
          <td>
            <img className='me-75' src={react} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'>Angular UI</span>
          </td>
          <td>Ana Bell</td>
          <td>
            <AvatarGroup data={avatarGroupData9} />
          </td>
          <td>
            <Badge pill color='light-primary'>
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
        <tr className='table-dark'>
          <td>
            <img className='me-75' src={vuejs} alt='bootstrap' height='20' width='20' />
            <span className='align-middle fw-bold'>Bootstrap UI</span>
          </td>
          <td>Jerry Milton</td>
          <td>
            <AvatarGroup data={avatarGroupData10} />
          </td>
          <td>
            <Badge pill color='light-dark'>
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
      </tbody>
    </Table>
  )
}

export default TableContextual
