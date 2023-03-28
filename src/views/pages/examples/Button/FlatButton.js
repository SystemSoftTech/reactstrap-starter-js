import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const FlatButton = () => {
  return (
    <>
      {/* Flat Buttons */}
      <AppCard title="Flat">
        <div className="demo-inline-spacing">
          <AppButton color="primary" type="flat">
            Button
          </AppButton>
          <AppButton color="warning" type="flat">
            Button
          </AppButton>
          <AppButton color="success" type="flat">
            Button
          </AppButton>
          <AppButton color="danger" type="flat">
            Button
          </AppButton>
          <AppButton color="dark" type="flat">
            Button
          </AppButton>
          <AppButton color="secondary" type="flat">
            Button
          </AppButton>
          <AppButton color="info" type="flat">
            Button
          </AppButton>
        </div>
      </AppCard>
    </>
  )
}

export default FlatButton
