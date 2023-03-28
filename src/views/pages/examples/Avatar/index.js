// ** React Imports
import { Fragment } from "react"

// ** Reactstrap Imports
import { Row, Col } from "reactstrap"

// ** Demo Components
import AvatarSizes from "./AvatarSizes"
import AvatarIcons from "./AvatarIcons"
import AvatarGroup from "./AvatarGroup"
import AvatarColors from "./AvatarColors"
import AvatarStatus from "./AvatarStatus"
import AvatarInitials from "./AvatarInitials"
import AvatarLightColors from "./AvatarLightColors"
import AppCard from "@components/Cards"
import AvatarGroupTooltip from "./AvatarGroupTooltip"

const AvatarExample = () => {
  return (
    <Fragment>
      <Row className="match-height">
        <Col xl="6" lg="12">
          <AppCard title="Sizes">
            {/* <CardText className="mb-0">
              Use <code>size=[sm | lg | xl]</code> prop to change avatar's size.
              You can also use <code>height</code> & <code>width</code> prop for
              a custom size
            </CardText> */}
            <AvatarSizes />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Intials">
            {/* <CardText className="mb-0">
              Use prop <code>initials</code> to show only Initials of content.
            </CardText> */}
            <AvatarInitials />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Colors">
            {/* <CardText className="mb-0">
              Use prop{" "}
              <code>
                color=[primary | success | danger | info | warning | dark]
              </code>{" "}
              to change background color of your avatar.
            </CardText> */}
            <AvatarColors />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Light Colors">
            {/* <CardText className="mb-0">
              Use prop{" "}
              <code>
                color=[light-primary | light-success | light-danger | light-info
                | light-warning | light-dark]
              </code>{" "}
              to change background color of your avatar.
            </CardText> */}
            <AvatarLightColors />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Icons">
            {/* <CardText className="mb-0">
              Use prop <code>icon</code> to create avatar with icon.
            </CardText> */}
            <AvatarIcons />
          </AppCard>
        </Col>
        <Col xl="6" sm="12">
          <AppCard title="Status">
            {/* <CardText className="mb-0">
              Use prop <code>status=[online | offline | away | busy]</code> to
              create avatar with status.
            </CardText> */}
            <AvatarStatus />
          </AppCard>
        </Col>
        <Col xl="6" sm="12">
          <AppCard title="Avatar Group">
            {/* <CardText>
              Use <code>&ltAvatarGroup /&gt</code> component and pass{" "}
              <code>data</code> prop to create a grouped avatar.
            </CardText>
            <CardText>
              Data prop must be an array of object which contains props to be
              passed on avatar.
            </CardText> */}
            <AvatarGroup />
          </AppCard>
        </Col>
        <Col xl="6" sm="12">
          <AppCard title="Avatar Group Tooltip">
            {/* <CardText>
              Add an extra property of <code>title</code> in the data you pass
              in <code>&ltAvatarGroup /&gt</code> to create avatar group with
              tooltip.
            </CardText> */}
            <AvatarGroupTooltip />
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
export default AvatarExample
