import { Col, Row } from "reactstrap"
import AppCard from "@components/Cards"

import FormHookExample from "./FormHook"
import FormHookIconExample from "./HookFormIcon"
import FormHookFloatingExample from "./FormHookFloating"

const ReactHookFormExample = () => {
  return (
    <div>
      <Row>
        <Col md="6">
          <AppCard title="React Hook From using Yup validators">
            <FormHookExample />
          </AppCard>
        </Col>
        <Col md="6">
          <AppCard title="React Hook From With Icon using Yup validators">
            <FormHookIconExample />
          </AppCard>
        </Col>
        <Col md="6">
          <AppCard title="React Hook From With Floating using Yup Validators">
            <FormHookFloatingExample />
          </AppCard>
        </Col>
        {/* <Col md="6">
          <AppCard title="Bootstrap Floating Input">
            <FormGroup floating>
              <Input type="email" placeholder="name@example.com" id="email4" />
              <label>Email address</label>
            </FormGroup>
            <FormGroup floating>
              <Input type="password" placeholder="name@example.com" id="password4" />
              <label>Password</label>
            </FormGroup>
          </AppCard>
        </Col> */}
      </Row>
    </div>
  )
}
export default ReactHookFormExample
