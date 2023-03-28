import { useState } from "react"
import { Alert } from "reactstrap"
import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"
import AppCollapse from "@components/Collapses"

const HorizontalCollapse = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppCard title="Horizontal Collapse" collapse={true} open={true}>
      <AppCollapse
        open={open}
        horizontal={true}
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
        <Alert
          style={{
            width: "500px",
            padding: 20,
            marginTop: 30
          }}
        >
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Alert>
      </AppCollapse>
    </AppCard>
  )
}

export default HorizontalCollapse
