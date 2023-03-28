// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverUncontrolled = () => {
  return (
    <Fragment>
      <Button color='primary' outline id='uncontrolledPopover'>
        Uncontrolled
      </Button>
      <UncontrolledPopover placement='bottom' target='uncontrolledPopover'>
        <PopoverHeader>Uncontrolled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </UncontrolledPopover>
    </Fragment>
  )
}
export default PopoverUncontrolled
