// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import VerticalForm from './VerticalForm'
import HorizontalForm from './HorizontalForm'
import VerticalFormIcons from './VerticalFormIcons'
import MultipleColumnForm from './MultipleColumnForm'
import HorizontalFormIcons from './HorizontalFormIcons'

const FormLayouts = () => {
  return (
    <Fragment>
      <Row>
        <Col md='6' sm='12'>
          <HorizontalForm />
        </Col>
        <Col md='6' sm='12'>
          <HorizontalFormIcons />
        </Col>
        <Col md='6' sm='12'>
          <VerticalForm />
        </Col>
        <Col md='6' sm='12'>
          <VerticalFormIcons />
        </Col>
        <Col sm='12'>
          <MultipleColumnForm />
        </Col>
      </Row>
    </Fragment>
  )
}
export default FormLayouts
