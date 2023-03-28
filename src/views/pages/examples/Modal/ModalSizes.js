import { useState } from "react"
import { Button } from "reactstrap"
import AppCard from "@components/Cards"
import AppModals from "@components/Modals"

const ModalSizes = () => {
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState("sm")
  const [fullscreen, setFullscreen] = useState(false)
  return (
    <AppCard title="Modal Sizes">
      <div className="demo-inline-spacing">
        <Button
          color="primary"
          outline={true}
          onClick={() => {
            setSize("xs")
            setOpen(true)
          }}
        >
          Extra small
        </Button>
        <Button
          color="primary"
          outline={true}
          onClick={() => {
            setSize("sm")
            setOpen(true)
          }}
        >
          Small Modal
        </Button>
        <Button
          color="primary"
          outline={true}
          onClick={() => {
            setSize("md")
            setOpen(true)
          }}
        >
          Default Modal
        </Button>
        <Button
          color="primary"
          outline={true}
          onClick={() => {
            setSize("lg")
            setOpen(true)
          }}
        >
          Large Modal
        </Button>
        <Button
          color="primary"
          outline={true}
          onClick={() => {
            setSize("xl")
            setOpen(true)
          }}
        >
          Extra Large Modal
        </Button>
        <Button
          color="primary"
          outline={true}
          onClick={() => setFullscreen(true)}
        >
          Full Screen
        </Button>
      </div>
      <AppModals
        open={open}
        setOpen={setOpen}
        title="Test Modal"
        size={size}
        footer={
          <Button color="primary" onClick={() => setOpen(false)}>
            Accept
          </Button>
        }
      >
        <p>This is the testing body</p>
      </AppModals>
      <AppModals
        open={fullscreen}
        setOpen={setFullscreen}
        fullscreen={true}
        title="Test Modal"
        footer={
          <Button color="primary" onClick={() => setFullscreen(false)}>
            Accept
          </Button>
        }
      >
        <p>This is the testing body</p>
      </AppModals>
    </AppCard>
  )
}

export default ModalSizes
