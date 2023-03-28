// ** React Imports
import { Fragment } from "react"

// ** Reactstrap Imports
import { Row, Col } from "reactstrap"

// ** Demo Components
import AccordionHover from "./AccordionHover"
import AccordionBorder from "./AccordionBorder"
import AccordionMargin from "./AccordionMargin"
import AccordionControlled from "./AccordionControlled"
import AccordionUncontrolled from "./AccordionUncontrolled"
import AccordionWithoutArrow from "./AccordionWithoutArrow"
import AppCard from "@components/Cards"
import AccordionExample from "./DynamicAccordian"

const Accordion = () => {
  return (
    <Fragment>
      <AppCard title="Dynamic Accordion">
        <AccordionExample />
      </AppCard>
      <Row>
        <Col sm="12">
          <AppCard title="Uncontrolled">
            {/* <CardText>You may want to open one item at a time, for that you can use accordion.</CardText> */}
            <AccordionUncontrolled />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Controlled">
            {/* <CardText>Manage a state to control your collapse component.</CardText> */}
            {/* <AccordionControlled /> */}
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Accordion Without Arrow">
            {/* <CardText>
              Use class <code>.accordion-without-arrow</code> class with <code>&ltAccordion&gt</code> for accordion
              without arrow.
            </CardText> */}
            {/* <AccordionWithoutArrow /> */}
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Border">
            {/* <CardText>
              Use class <code>.accordion-border</code> class with your accordion to create a bordered accordion.
            </CardText> */}
            {/* <AccordionBorder /> */}
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Margin">
            {/* <CardText>
              Use class <code>.accordion-margin</code> class with your accordion to create a accordion with margin.
            </CardText> */}
            {/* <AccordionMargin /> */}
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Hover">
            {/* <AccordionHover /> */}
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Accordion
