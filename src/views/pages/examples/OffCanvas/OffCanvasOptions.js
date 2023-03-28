import { useState } from "react"
import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"
import AppOffCanvas from "@components/OffCanvas"

const OffCanvasOptions = () => {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(true)
  const [backdrop, setBackdrop] = useState(false)
  const [keyboard, setKeyboard] = useState(false)

  return (
    <AppCard title="OffCanvas Options" collapse={true} open={true}>
      <div className="demo-inline-spacing">
        {/* Modals Buttons */}
        <AppButton
          color="primary"
          type="fill"
          handleClick={() => {
            setOpen(true)
            setScroll(true)
            setBackdrop(true)
            setKeyboard(true)
          }}
        >
          Enable Body Scroll
        </AppButton>
        <AppButton
          color="primary"
          type="fill"
          handleClick={() => {
            setOpen(true)
            setScroll(false)
            setBackdrop("static")
            setKeyboard(false)
          }}
        >
          Disabled Backdrop
        </AppButton>

        <AppOffCanvas
          open={open}
          setOpen={setOpen}
          direction="end"
          title="OffCanvas Options"
          scroll={scroll}
          backdrop={backdrop}
          keyboard={keyboard}
        >
          <p className="text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
          <p className="text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
          <p className="text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
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

export default OffCanvasOptions
