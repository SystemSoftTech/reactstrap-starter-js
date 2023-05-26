// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Third Party Components
import Prism from 'prismjs'

// ** Custom Components
// import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import InputGroupBasic from './InputGroupBasic'
import InputGroupSizes from './InputGroupSizes'
import InputGroupMerged from './InputGroupMerged'
import InputGroupButtons from './InputGroupButtons'
import InputCbAndRadio from './InputGroupCbAndRadio'
import InputGroupDropdown from './InputGroupDropdown'
import AppCard from '@components/Cards'

const InputGroups = () => {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Fragment>
      {/* <Breadcrumbs title='Input Groups' data={[{ title: 'Form Elements' }, { title: 'InputGroups' }]} /> */}
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <AppCard title='Basic'>
            <InputGroupBasic />
          </AppCard>
        </Col>
        <Col md='6' sm='12'>
          <AppCard title='Merged'>
            <InputGroupMerged />
          </AppCard>
        </Col>
        <Col md='6' sm='12'>
          <AppCard title='Sizing'>
            <InputGroupSizes />
          </AppCard>
        </Col>
        <Col md='6' sm='12'>
          <AppCard title='Checkbox & Radio'>
            <InputCbAndRadio />
          </AppCard>
        </Col>
        <Col sm='12'>
          <AppCard title='Input Group with Buttons'>
            <InputGroupButtons />
          </AppCard>
        </Col>
        <Col sm='12'>
          <AppCard title='Input Group Dropdowns'>
            <InputGroupDropdown />
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
export default InputGroups
