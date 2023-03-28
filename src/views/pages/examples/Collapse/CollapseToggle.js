import { useState } from "react"
import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"
import AppCollapse from "@components/Collapses"

const CollapseToggle = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppCard title="Collapse Basic" collapse={true} open={true}>
      <AppCollapse
        open={open}
        header={
          <AppButton
            color="primary"
            type="fill"
            handleClick={() => setOpen(!open)}
          >
            Toggle
          </AppButton>
        }
      >
        <div className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters.
        </div>
      </AppCollapse>
    </AppCard>
  )
}

export default CollapseToggle
