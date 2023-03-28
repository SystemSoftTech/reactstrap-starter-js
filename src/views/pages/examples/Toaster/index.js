// ** ReactStrap
import { Col, Row } from "reactstrap"

// ** Third Party Components
import { Slide, toast } from "react-toastify"
import AppCard from "@components/Cards"
import AppButton from "@components/Buttons"

// ** Styles
import "@styles/react/libs/toastify/toastify.scss"

const ToasterExample = () => {
  // ** Toaster Notify
  function BlankToaster() {
    toast("This is Blank.", {
      transition: Slide,
      autoClose: 1000
    })
  }

  // ** Toaster Notify
  function MultilineToaster() {
    toast.info(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller.",
      {
        //   transition: Slide,
        autoClose: 1000
      }
    )
  }

  // ** Toaster Notify
  function SuccessToaster() {
    toast.success("This is Blank.", {
      //   transition: Slide,
      autoClose: 1000
    })
  }

  // ** Toaster Notify
  function ErrorToaster() {
    toast.error("This is Blank.", {
      //   transition: Slide,
      autoClose: 1000
    })
  }

  // ** Toaster Notify
  function ColoredBlankToaster() {
    toast.warning("This is Blank.", {
      transition: Slide,
      autoClose: 10000,
      theme: "colored"
    })
  }

  // ** Toaster Notify
  function ColoredMultilineToaster() {
    toast.info(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller.",
      {
        //   transition: Slide,
        autoClose: 10000,
        theme: "colored"
      }
    )
  }

  // ** Toaster Notify
  function ColoredSuccessToaster() {
    toast.success("This is Blank.", {
      //   transition: Slide,
      autoClose: 10000,
      theme: "colored"
    })
  }

  // ** Toaster Notify
  function ColoredErrorToaster() {
    toast.error("This is Blank.", {
      //   transition: Slide,
      autoClose: 10000,
      theme: "colored"
    })
  }

  return (
    <Row>
      <Col sm={3}>
        <div className="text-center">
          <AppCard>
            <p>The most basic variant does not have an icon.</p>
            <AppButton color="primary" type="fill" handleClick={BlankToaster}>
              Blank
            </AppButton>
          </AppCard>
        </div>
      </Col>
      <Col sm={3}>
        <div className="text-center">
          <AppCard>
            <p>The most basic variant does not have an icon.</p>
            <AppButton color="info" type="fill" handleClick={MultilineToaster}>
              Multiline
            </AppButton>
          </AppCard>
        </div>
      </Col>
      <Col sm={3}>
        <div className="text-center">
          <AppCard>
            <p>The most basic variant does not have an icon.</p>
            <AppButton color="success" type="fill" handleClick={SuccessToaster}>
              Success
            </AppButton>
          </AppCard>
        </div>
      </Col>
      <Col sm={3}>
        <div className="text-center">
          <AppCard>
            <p>The most basic variant does not have an icon.</p>
            <AppButton color="danger" type="fill" handleClick={ErrorToaster}>
              Error
            </AppButton>
          </AppCard>
        </div>
      </Col>

      <Col sm={3}>
        <div className="text-center">
          <AppCard>
            <p>The most basic variant does not have an icon.</p>
            <AppButton
              color="warning"
              type="fill"
              handleClick={ColoredBlankToaster}
            >
              Colored Blank
            </AppButton>
          </AppCard>
        </div>
      </Col>
      <Col sm={3}>
        <div className="text-center">
          <AppCard>
            <p>The most basic variant does not have an icon.</p>
            <AppButton
              color="info"
              type="fill"
              handleClick={ColoredMultilineToaster}
            >
              Colored Multiline
            </AppButton>
          </AppCard>
        </div>
      </Col>
      <Col sm={3}>
        <div className="text-center">
          <AppCard>
            <p>The most basic variant does not have an icon.</p>
            <AppButton
              color="success"
              type="fill"
              handleClick={ColoredSuccessToaster}
            >
              Colored Success
            </AppButton>
          </AppCard>
        </div>
      </Col>
      <Col sm={3}>
        <div className="text-center">
          <AppCard>
            <p>The most basic variant does not have an icon.</p>
            <AppButton
              color="danger"
              type="fill"
              handleClick={ColoredErrorToaster}
            >
              Colored Error
            </AppButton>
          </AppCard>
        </div>
      </Col>
    </Row>
  )
}

export default ToasterExample
