// ** React Imports
import { Fragment } from "react"

// ** Reactstrap Imports
import { Row, Col } from "reactstrap"

// ** Reusable Component
import AppCard from "@components/Cards"
import AppProgress from "@components/Progress"

// ** Demo Components
import ProgressBasic from "./ProgressBasic"
import ProgressColored from "./ProgressColored"
import ProgressLabeled from "./ProgressLabeled"
import ProgressStriped from "./ProgressStriped"
import ProgressAnimated from "./ProgressAnimated"
import ProgressMultipleStacked from "./ProgressMultipleStacked"

const Progress = () => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <AppCard title="Basic Progress">
            <AppProgress
              color="info"
              animated={true}
              striped={true}
              value={20}
              label={"20%"}
            />
            <br />
            <ProgressBasic />
          </AppCard>
        </Col>
        <Col lg="12">
          <AppCard title="Colored Progress">
            {/* <CardText>
              Use <code>progress-bar-[color]</code> class with progress to change progress color.
            </CardText> */}
            <ProgressColored />
          </AppCard>
        </Col>
        <Col lg="12">
          <AppCard title="Labeled Progress">
            {/* <CardText>Add text between progress tag to create a labeled progress bar.</CardText> */}
            <ProgressLabeled />
          </AppCard>
        </Col>
        <Col lg="12">
          <AppCard title="Multiple Stacked">
            {/* <CardText>
              To create a multi colored progress wrap all of your progresses in with <code>multi</code> prop.
            </CardText> */}
            <ProgressMultipleStacked />
          </AppCard>
        </Col>
        <Col lg="12">
          <AppCard title="Striped Progress">
            {/* <CardText>
              Use <code>striped</code> prop with progress to create a striped progress bar.
            </CardText> */}
            <ProgressStriped />
          </AppCard>
        </Col>
        <Col lg="12">
          <AppCard title="Animated Progress">
            {/* <CardText>
              Use <code>animated</code> prop with progress to animate progress bar.
            </CardText> */}
            <ProgressAnimated />
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Progress
