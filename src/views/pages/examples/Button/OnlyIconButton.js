import { AlertCircle, Check, Eye, Home, Search } from "react-feather"
import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const OnlyIconButton = () => {
  return (
    <>
      {/* Only Icons */}
      <AppCard title="Only Icons">
        <div className="demo-inline-spacing">
          <AppButton color="primary" type="flat" icon={true}>
            <Home size={16} />
          </AppButton>
          <AppButton color="warning" type="outline" round={true} icon={true}>
            <Search size={16} />
          </AppButton>
          <AppButton color="success" type="relief" icon={true}>
            <AlertCircle size={16} />
          </AppButton>
          <AppButton color="info" type="outline" disabled={true} icon={true}>
            <Eye size={16} />
          </AppButton>
          <AppButton color="success" type="flat" icon={true}>
            <Check size={16} />
          </AppButton>
        </div>
      </AppCard>
    </>
  )
}

export default OnlyIconButton
