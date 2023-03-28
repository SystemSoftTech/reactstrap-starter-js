import { useState } from "react"
import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"
import AppOffCanvas from "@components/OffCanvas"

const OffCanvasPosition = () => {
  const [open, setOpen] = useState(false)
  const [direction, setDirection] = useState("start")

  return (
    <AppCard title="OffCanvas Position" collapse={true} open={true}>
      <div className="demo-inline-spacing">
        {/* Modals Buttons */}
        <AppButton
          color="primary"
          type="fill"
          handleClick={() => {
            setDirection("start")
            setOpen(true)
          }}
        >
          Toggle Start
        </AppButton>
        <AppButton
          color="primary"
          type="fill"
          handleClick={() => {
            setDirection("end")
            setOpen(true)
          }}
        >
          Toggle End
        </AppButton>
        <AppButton
          color="primary"
          type="fill"
          handleClick={() => {
            setDirection("top")
            setOpen(true)
          }}
        >
          Toggle Top
        </AppButton>
        <AppButton
          color="primary"
          type="fill"
          handleClick={() => {
            setDirection("bottom")
            setOpen(true)
          }}
        >
          Toggle Bottom
        </AppButton>
        <AppOffCanvas
          open={open}
          setOpen={setOpen}
          direction={direction}
          title="OffCanvas Position"
        >
          <p className="text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </AppOffCanvas>
      </div>
    </AppCard>
  )
}

export default OffCanvasPosition
