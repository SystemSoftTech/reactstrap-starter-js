// ** Reactstrap Imports
import { Row, Col } from "reactstrap"

// ** Demo Components
import PopoverTriggers from "./PopoverTriggers"
import PopoverPositions from "./PopoverPositions"
import PopoverControlled from "./PopoverControlled"
import PopoverUncontrolled from "./PopoverUncontrolled"
import AppCard from "@components/Cards"
import AppPopover from "@components/Popovers"
import AppButton from "@components/Buttons"

const Popover = () => {
  return (
    <>
      <Row>
        <Col md={4} sm={12}>
          <AppCard title="Reusable Popover">
            <AppButton color="primary" type="outline" id="dynamic-popover">
              Reusable Popover
            </AppButton>
            <AppPopover
              id="dynamic-popover"
              position="right"
              heading="Re-usable Component"
              body="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."
            />
          </AppCard>
        </Col>
        <Col md="4" sm="12">
          <AppCard title="Controlled Popover">
            {/* <CardText>
              For controlled Popover you'll have to manage state of component.
              Controlled Popover require <code>isOpen</code> and{" "}
              <code>toggle</code> props to work.
            </CardText> */}
            <PopoverControlled />
          </AppCard>
        </Col>
        <Col md="4" sm="12">
          <AppCard title="Uncontrolled Popover">
            {/* <CardText>
              You can create an uncontrolled popover without having to manage
              state. All you have to do is wrap your content inside
              UncontrolledPopover tag.
            </CardText> */}
            <PopoverUncontrolled />
          </AppCard>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <AppCard title="Popover Positions">
            {/* <CardText className="mb-0">
              Use prop <code>placement</code> to place you popover at desired
              position.
            </CardText> */}
            <PopoverPositions />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Popover Triggers">
            {/* <CardText className="mb-0">
              Use prop <code>trigger</code> for various trigger options. Trigger
              each popover to see information about the trigger.
            </CardText> */}
            <PopoverTriggers />
          </AppCard>
        </Col>
      </Row>
    </>
  )
}
export default Popover
