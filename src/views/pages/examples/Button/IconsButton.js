import { AlertCircle, Check, Eye, Home, Search } from "react-feather"
import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const IconsButton = () => {
  return (
    <>
      {/* Icons Buttons */}
      <AppCard title="Icons Text">
        <div className="demo-inline-spacing">
          <AppButton color="primary" type="flat" round={true}>
            <Home size={14} />
            <span className="align-middle ms-25">Button</span>
          </AppButton>
          <AppButton color="warning" type="outline">
            <Search size={14} />
            <span className="align-middle ms-25">Button</span>
          </AppButton>
          <AppButton color="success" type="relief" round={true}>
            <AlertCircle size={14} />
            <span className="align-middle ms-25">Button</span>
          </AppButton>
          <AppButton color="info" type="outline" disabled={true}>
            <Eye size={14} />
            <span className="align-middle ms-25">Button</span>
          </AppButton>
          <AppButton color="success" type="flat">
            <Check size={14} />
            <span className="align-middle ms-25">Button</span>
          </AppButton>
        </div>
      </AppCard>
    </>
  )
}

export default IconsButton
