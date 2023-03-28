// ** React Imports
import { Fragment } from "react"

// ** Reactstrap Imports
import { Row, Col } from "reactstrap"

// ** Demo Components
import PillsEnd from "./PillsEnd"
import PillsBasic from "./PillsBasic"
import PillThemes from "./PillThemes"
import PillsFilled from "./PillsFilled"
import PillsCentered from "./PillsCentered"
import PillsVertical from "./PillsVertical"
import PillsJustified from "./PillsJustified"
import AppCard from "@components/Cards"

const PillTabs = () => {
  return (
    <Fragment>
      <Row className="match-height nav-tabs-style">
        <Col xl="6" lg="12">
          <AppCard title="Basic">
            <PillsBasic />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Vertical Stacked">
            <PillsVertical />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Filled">
            <PillsFilled />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Justified">
            <PillsJustified />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Centered">
            <PillsCentered />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="End">
            <PillsEnd />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Themes">
            <PillThemes />
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
export default PillTabs
