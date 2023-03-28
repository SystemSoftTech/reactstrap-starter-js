import { useState } from "react"
import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"
import AppModals from "@components/Modals"

const ModalEvents = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppCard title="Themes Modal">
      <div className="demo-inline-spacing">
        <AppButton
          color="primary"
          type="outline"
          handleClick={() => setOpen(true)}
        >
          On Opened and Closed
        </AppButton>

        {/* Modals */}
        <AppModals
          open={open}
          setOpen={setOpen}
          title="Test Modal"
          center={true}
          onClosed={() => console.log("OnClosed")}
          onOpened={() => console.log("OnOpened")}
        >
          <h5>Check First Paragraph</h5>
          Oat cake ice cream candy chocolate cake chocolate cake cotton candy
          dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
          topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
          liquorice.
        </AppModals>
      </div>
    </AppCard>
  )
}

export default ModalEvents
