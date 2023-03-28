// ** React Imports
import { Fragment } from "react"

// ** Reactstrap Imports
import { Row, Col } from "reactstrap"

// ** Demo Components
import SpinnerFlex from "./SpinnerFlex"
import SpinnerFloat from "./SpinnerFloat"
import SpinnerSizes from "./SpinnerSizes"
import SpinnerGrow from "./SpinnerGrowing"
import SpinnerBorder from "./SpinnerBorder"
import SpinnerColors from "./SpinnerColors"
import SpinnerButtons from "./SpinnerButtons"
import SpinnerGrowColors from "./SpinnerGrowingColored"
import SpinnerTextAlignment from "./SpinnerTextAlignment"
import AppCard from "@components/Cards"

const Spinners = () => {
  return (
    <Fragment>
      <Row className="match-height">
        <Col md="6" sm="12">
          <AppCard title="Border Spinner">
            {/* <CardText>
              Use <code>Spinner</code> tag to create a bordered spinner.
            </CardText> */}
            <SpinnerBorder />
          </AppCard>
        </Col>
        <Col md="6" sm="12">
          <AppCard title="Colors">
            {/* <CardText className="mb-0">
              Use <code>color</code> attribute to create a colored spinner.
            </CardText> */}
            <SpinnerColors />
          </AppCard>
        </Col>
        <Col md="6" sm="12">
          <AppCard title="Growing Spinner">
            {/* <CardText>
              Use <code>type="grow"</code> with spinner tag to create a growing
              spinner.
            </CardText> */}
            <SpinnerGrow />
          </AppCard>
        </Col>
        <Col md="6" sm="12">
          <AppCard title="Colored Growing Spinners">
            {/* <CardText className="mb-0">
              Use <code>color</code> and <code>type</code> attribute to create a
              colored growing spinner.
            </CardText> */}
            <SpinnerGrowColors />
          </AppCard>
        </Col>
        <Col md="6" sm="12">
          <AppCard title="Flex">
            {/* <CardText>
              Use Flexbox utilities to place spinners.Use <code>.d-flex</code>{" "}
              and <code>.justify-content-[side]</code>.
            </CardText> */}
            <SpinnerFlex />
          </AppCard>
        </Col>
        <Col md="6" sm="12">
          <AppCard title="Float">
            {/* <CardText>
              Use <code>.float-[side]</code> with spinner tag to change
              spinner's position.
            </CardText> */}
            <SpinnerFloat />
          </AppCard>
        </Col>
        <Col md="6" sm="12">
          <AppCard title="Text Alignment">
            {/* <CardText>
              You can also use <code>.text-[side]</code> as a wrapper to spinner
              tag to change spinner's position.
            </CardText> */}
            <SpinnerTextAlignment />
          </AppCard>
        </Col>
        <Col md="6" sm="12">
          <AppCard title="Sizes">
            {/* <CardText className="mb-0">
              Use prop <code>size="sm"</code> for Small spinner or use{" "}
              <code>style</code> prop for custom size.
            </CardText> */}
            <SpinnerSizes />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Buttons">
            <SpinnerButtons />
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Spinners
