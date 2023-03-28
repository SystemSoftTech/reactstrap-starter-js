// ** React Imports
import { Fragment } from "react"

// ** Reactstrap Imports
import { Row, Col } from "reactstrap"

// ** Reusable Component
import AppCard from "@components/Cards"
import AppButton from "@components/Buttons"
import AppTooltip from "@components/Tooltips"

// ** Demo Components
import TooltipPositions from "./TooltipPositions"
import TooltipControlled from "./TooltipControlled"
import TooltipUncontrolled from "./TooltipUncontrolled"

const Tooltips = () => {
  return (
    <Fragment>
      <Row>
        <Col xl="6" lg="12">
          <AppCard title="Controlled Tooltip">
            {/* <CardText>
              For controlled tooltips you'll have to manage state of component.controlled tooltips require{' '}
              <code>isOpen</code> and <code>toggle</code> props to work.
            </CardText> */}
            <AppButton color="primary" type="fill" id="dynamic-tooltip">
              Show/Hide
            </AppButton>
            <AppTooltip text="Show some" id="dynamic-tooltip" />
            <TooltipControlled />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Uncontrolled Tooltip">
            {/* <CardText>
              UncontrolledTooltip does not require <code>isOpen</code> nor <code>toggle</code> props to work.All you
              have to do is provide a valid target to tooltip.
            </CardText> */}
            <TooltipUncontrolled />
          </AppCard>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <AppCard title="Tooltip Positions">
            {/* <CardText className='mb-0'>
              Use prop <code>placement</code> to change position of tooltip.
            </CardText> */}
            <TooltipPositions />
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Tooltips
