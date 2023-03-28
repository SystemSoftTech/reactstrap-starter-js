import React, { useState } from "react"

import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"
import AppToasts from "@components/Toasts"

const ToastsExample = () => {
  const [open, setOpen] = useState(true)
  const [color, setColor] = useState("success")
  const [header, setHeader] = useState("Success!")

  return (
    <div>
      <AppToasts
        isOpen={open}
        toggle={setOpen}
        heading={header}
        color={color}
        icon
        timer={5000}
      >
        This is a toast with a primary icon — check it out!
      </AppToasts>
      <AppCard title="Toasts">
        <div className="demo-inline-spacing">
          <AppButton
            color="success"
            type="fill"
            handleClick={() => {
              setColor("success")
              setHeader("Success!")
              setOpen(true)
            }}
          >
            Primary
          </AppButton>
          <AppButton
            color="info"
            type="fill"
            handleClick={() => {
              setColor("info")
              setHeader("Information!")
              setOpen(true)
            }}
          >
            Info
          </AppButton>
          <AppButton
            color="warning"
            type="fill"
            handleClick={() => {
              setColor("warning")
              setHeader("Warning!")
              setOpen(true)
            }}
          >
            Warning
          </AppButton>
          <AppButton
            color="danger"
            type="fill"
            handleClick={() => {
              setColor("danger")
              setHeader("Error")
              setOpen(true)
            }}
          >
            Danger
          </AppButton>
        </div>
      </AppCard>
    </div>
  )
}

export default ToastsExample
