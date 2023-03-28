import { useState } from "react"
import { Button, Input } from "reactstrap"
import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"
import AppModals from "@components/Modals"

const UnmountModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppCard title="Unmount Modal">
      <div className="demo-inline-spacing">
        {/* Modals Buttons */}
        <AppButton
          color="primary"
          type="outline"
          handleClick={() => setOpen(true)}
        >
          Unmount Modal
        </AppButton>
        <AppModals
          open={open}
          setOpen={setOpen}
          center={true}
          title="Unmount Modal"
          unmountOnClose={false}
          footer={
            <Button color="primary" onClick={() => setOpen(false)}>
              Accept
            </Button>
          }
        >
          <Input
            type="textarea"
            placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
            rows={5}
          />
        </AppModals>
      </div>
    </AppCard>
  )
}

export default UnmountModal
