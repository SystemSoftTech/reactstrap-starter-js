import { useState } from "react"
import { Button } from "reactstrap"
import AppCard from "@components/Cards"
import AppModals from "@components/Modals"

const ModalBasic = () => {
  const [basicModal, setBasicModal] = useState(false)
  const [centeredModal, setCenteredModal] = useState(false)
  const [disabledModal, setDisabledModal] = useState(false)
  const [disabledAnimation, setDisabledAnimation] = useState(false)
  return (
    <AppCard title="Modal Basic">
      <div className="demo-inline-spacing">
        <Button color="primary" onClick={() => setBasicModal(true)}>
          Extra small
        </Button>
        <Button color="primary" onClick={() => setCenteredModal(true)}>
          Vertically Modal
        </Button>
        <Button color="primary" onClick={() => setDisabledModal(true)}>
          Disabled Backdrop
        </Button>
        <Button color="primary" onClick={() => setDisabledAnimation(true)}>
          Disabled Animation
        </Button>
      </div>
      <AppModals
        open={basicModal}
        setOpen={setBasicModal}
        title="Basic Modal"
        footer={
          <Button color="primary" onClick={() => setBasicModal(false)}>
            Accept
          </Button>
        }
      >
        <h5>Check First Paragraph</h5>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </AppModals>
      <AppModals
        open={centeredModal}
        setOpen={setCenteredModal}
        center={true}
        title="Test Modal"
        footer={
          <Button color="primary" onClick={() => setCenteredModal(false)}>
            Accept
          </Button>
        }
      >
        <h5>Check First Paragraph</h5>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </AppModals>
      <AppModals
        open={disabledModal}
        setOpen={setDisabledModal}
        backdrop={"static"}
        keyboard={false}
        title="Test Modal"
        footer={
          <Button color="primary" onClick={() => setDisabledModal(false)}>
            Accept
          </Button>
        }
      >
        <h5>Check First Paragraph</h5>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </AppModals>
      <AppModals
        open={disabledAnimation}
        setOpen={setDisabledAnimation}
        animate={false}
        title="Test Modal"
        footer={
          <Button color="primary" onClick={() => setDisabledAnimation(false)}>
            Accept
          </Button>
        }
      >
        <h5>Check First Paragraph</h5>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </AppModals>
    </AppCard>
  )
}

export default ModalBasic
