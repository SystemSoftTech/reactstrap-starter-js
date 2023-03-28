// ** Reactstrap Imports
import { Row, Col, CardText } from "reactstrap"

// ** Demo Components
import DropdownFlat from "./DropdownFlat"
import DropdownBasic from "./DropdownBasic"
import DropdownSplit from "./DropdownSplit"
import DropdownSizes from "./DropdownSizes"
import DropdownOutline from "./DropdownOutline"
import DropdownGradient from "./DropdownGradient"
import DropdownDirections from "./DropdownDirections"
import DropdownVariations from "./DropdownVariations"
import DropdownControlled from "./DropdownControlled"
import DropdownUncontrolled from "./DropdownUncontrolled"
import AppCard from "@components/Cards"

const DropdownsExample = () => {
  return (
    <>
      <Row>
        <Col md="6" sm="12">
          <AppCard title="Controlled Dropdown">
            {/* <CardText>
              If you want to use controlled dropdown you'll have to manage state
              for it.
            </CardText> */}
            <DropdownControlled />
          </AppCard>
        </Col>
        <Col md="6" sm="12">
          <AppCard title="Uncontrolled Dropdown">
            {/* <CardText>
              With uncontrolled dropdown you won't have to manage state.
            </CardText> */}
            <DropdownUncontrolled />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Basic">
            <DropdownBasic />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Split">
            {/* <CardText className="mb-0">
              Use class <code>.dropdown-toggle-split</code> and add a split
              button within your dropdown to create a dropdownSplit
            </CardText> */}
            <DropdownSplit />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Outline">
            {/* <CardText className="mb-0">
              Use <code>.outline</code> attribute with button to create outline
              dropdown.
            </CardText> */}
            <DropdownOutline />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Flat">
            {/* <CardText className="mb-0">
              Use class <code>color="flat-*"</code> to create a flat dropdown.
            </CardText> */}
            <DropdownFlat />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Gradient">
            {/* <CardText className="mb-0">
              Use class <code>btn-gradient-*</code> to create a gradient
              dropdown.
            </CardText> */}
            <DropdownGradient />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Sizes">
            {/* <CardText className="mb-0">
              Use class <code>.btn-[lg/sm]</code> to create a small or large
              dropdown.
            </CardText> */}
            <DropdownSizes />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Directions">
            {/* <CardText className="mb-0">
              You can use drop from different direction to use drop from{" "}
              <code>bottom right</code> use right prop with your dropdown-menu.
              for drop directions use <code>direction=[up/start/end]</code>
            </CardText> */}
            <DropdownDirections />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Variations">
            {/* <CardText>
              To create a dropdown with groups you can use prop{" "}
              <code>header</code> for the header of groups and for separation of
              group you can use prop <code>divider</code>.
            </CardText>
            <CardText className="mb-0">
              To create a dropdown with icons use class{" "}
              <code>.dropdown-icon-wrapper</code> with your dropdown.
            </CardText> */}
            <DropdownVariations />
          </AppCard>
        </Col>
      </Row>
    </>
  )
}
export default DropdownsExample
