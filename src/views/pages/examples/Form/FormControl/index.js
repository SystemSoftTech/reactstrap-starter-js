import { Col, Row } from "reactstrap"
import { BasicInput } from "./BasicInput"
import { InputFloating } from "./InputFloating"
import { InputHorizontalSize } from "./InputHozitontalSize"
import { InputSize } from "./InputSize"
import { InputState } from "./InputStates"

const BasicFormControl = () => {
  return (
    <div>
      <Row>
        <Col md={12}>
          <BasicInput />
        </Col>
        <Col md={6}>
          <InputSize />
        </Col>
        <Col md={6}>
          <InputHorizontalSize />
        </Col>
        <Col md={12}>
          <InputFloating />
        </Col>
        <Col md={12}>
          <InputState />
        </Col>
      </Row>
    </div>
  )
}

export default BasicFormControl
