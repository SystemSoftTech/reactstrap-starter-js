// ** React Imports
import { Fragment } from "react"

// ** Icons Imports
import { MoreVertical, Edit, Trash } from "react-feather"

// ** Reactstrap Imports
import {
  Row,
  Col,
  Table,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap"

// ** Reusable Components
import AppCard from "@components/Cards"
import AppBadge from "@components/Badges"

// ** Demo Components
import TableDark from "./TableDark"
import TableBasic from "./TableBasic"
import TableHover from "./TableHover"
import TableSmall from "./TableSmall"
import TableStriped from "./TableStriped"
import TableBordered from "./TableBordered"
import TableTheadDark from "./TableTheadDark"
import TableContextual from "./TableContextual"
import TableResponsive from "./TableResponsive"
import TableBorderless from "./TableBorderless"
import TableTheadLight from "./TableTheadLight"
import TableStripedDark from "./TableStripedDark"

const Tables = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <AppCard title="Basic Table" noSpace={true}>
            <Table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Users</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Angular Project</td>
                  <td>Peter Charles</td>
                  <td>
                    <AppBadge color="primary" light pill>
                      Active
                    </AppBadge>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="icon-btn hide-arrow"
                        color="transparent"
                        size="sm"
                        caret
                      >
                        <MoreVertical size={15} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">Edit</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Delete</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td>Angular Project</td>
                  <td>Peter Charles</td>
                  <td>
                    <AppBadge color="success" glow pill>
                      Completed
                    </AppBadge>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="icon-btn hide-arrow"
                        color="transparent"
                        size="sm"
                        caret
                      >
                        <MoreVertical size={15} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">Edit</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Delete</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td>Angular Project</td>
                  <td>Peter Charles</td>
                  <td>
                    <AppBadge color="info" light pill>
                      Scheduled
                    </AppBadge>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="icon-btn hide-arrow"
                        color="transparent"
                        size="sm"
                        caret
                      >
                        <MoreVertical size={15} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">Edit</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Delete</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
                <tr>
                  <td>Angular Project</td>
                  <td>Peter Charles</td>
                  <td>
                    <AppBadge color="warning" light pill>
                      Pending
                    </AppBadge>
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="icon-btn hide-arrow"
                        color="transparent"
                        size="sm"
                        caret
                      >
                        <MoreVertical size={15} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Edit className="me-50" size={15} />{" "}
                          <span className="align-middle">Edit</span>
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Trash className="me-50" size={15} />{" "}
                          <span className="align-middle">Delete</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Basic" noBody>
            <TableBasic />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Dark" noBody>
            {/* <CardBody>
              <CardText>
                Use prop <code>dark</code> to create a dark inverted table.
              </CardText>
            </CardBody> */}
            <TableDark />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Table head Options" noBody>
            {/* <CardBody>
              <CardText>
                Similar to tables and dark tables, use the modifier classes{" "}
                <code>.table-dark</code> to make <code>&ltthead&gt</code>{" "}
                appear dark.
              </CardText>
            </CardBody> */}
            <TableTheadDark />
            {/* <CardBody className="mt-2">
              <p className="m-0">
                Use the modifier class <code>.table-light</code> to make{" "}
                <code>&ltthead&gt</code> appear light.
              </p>
            </CardBody> */}
            <TableTheadLight />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Striped" noBody>
            {/* <CardBody>
              <CardText>
                Use prop <code>striped</code> to create a striped table.
              </CardText>
            </CardBody> */}
            <TableStriped />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Striped Dark" noBody>
            {/* <CardBody>
              <CardText>
                Use props <code>striped</code> & <code>dark</code> to create a
                dark striped table.
              </CardText>
            </CardBody> */}
            <TableStripedDark />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Bordered" noBody>
            {/* <CardBody>
              <CardText>
                Use prop <code>bordered</code> to create a bordered table.
              </CardText>
            </CardBody> */}
            <TableBordered />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Borderless" noBody>
            {/* <CardBody>
              <CardText>
                Use prop <code>borderless</code> to create a borderless table.
              </CardText>
            </CardBody> */}
            <TableBorderless />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Hoverable" noBody>
            {/* <CardBody>
              <CardText>
                Use prop <code>hover</code> to create a hoverable table.
              </CardText>
            </CardBody> */}
            <TableHover />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Small" noBody>
            {/* <CardBody>
              <CardText>
                Use prop <code>size="sm"</code> to create a small table.
              </CardText>
            </CardBody> */}
            <TableSmall />
          </AppCard>
        </Col>
        <Col sm="12">
          <AppCard title="Contextual classes" noBody>
            {/* <CardBody>
              <CardText>
                Use class <code>table-[colorName]</code> with{" "}
                <code>&lttr&gt</code> for contextual rows.
              </CardText>
            </CardBody> */}
            <TableContextual />
          </AppCard>
        </Col>
        <Col className="my-2" sm="12">
          <h5 className="mb-1">Table without card</h5>
          <TableBasic />
        </Col>
        <Col sm="12">
          <AppCard title="Responsive" noBody>
            {/* <CardBody>
              <CardText>
                Use prop <code>responsive</code> to make your table responsive.
              </CardText>
            </CardBody> */}
            <TableResponsive />
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tables
