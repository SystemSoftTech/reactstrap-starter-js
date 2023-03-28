import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"
import AppModals from "@components/Modals"
import { useState } from "react"

const ModalTheme = () => {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("primary")

  return (
    <AppCard title="Themes Modal">
      <div className="demo-inline-spacing">
        {/* Modals Buttons */}
        <AppButton
          color="primary"
          type="outline"
          handleClick={() => {
            setTheme("primary")
            setOpen(true)
          }}
        >
          Primary
        </AppButton>
        <AppButton
          color="secondary"
          type="outline"
          handleClick={() => {
            setTheme("secondary")
            setOpen(true)
          }}
        >
          Secondary
        </AppButton>
        <AppButton
          color="warning"
          type="outline"
          handleClick={() => {
            setTheme("warning")
            setOpen(true)
          }}
        >
          Warning
        </AppButton>
        <AppButton
          color="success"
          type="outline"
          handleClick={() => {
            setTheme("success")
            setOpen(true)
          }}
        >
          Success
        </AppButton>
        <AppButton
          color="info"
          type="outline"
          handleClick={() => {
            setTheme("info")
            setOpen(true)
          }}
        >
          Info
        </AppButton>
        <AppButton
          color="danger"
          type="outline"
          handleClick={() => {
            setTheme("danger")
            setOpen(true)
          }}
        >
          Danger
        </AppButton>
        <AppButton
          color="dark"
          type="outline"
          handleClick={() => {
            setTheme("dark")
            setOpen(true)
          }}
        >
          Dark
        </AppButton>

        {/* Modals */}
        <AppModals
          open={open}
          setOpen={setOpen}
          title="Test Modal"
          type={theme}
          center={true}
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

export default ModalTheme
