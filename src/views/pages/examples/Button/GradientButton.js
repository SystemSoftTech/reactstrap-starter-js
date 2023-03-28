import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const GradientButton = () => {
  return (
    <>
      {/* Gradient Buttons */}
      <AppCard title="Gradient">
        <div className="demo-inline-spacing">
          <AppButton color="primary" type="gradient">
            Button
          </AppButton>
          <AppButton color="warning" type="gradient">
            Button
          </AppButton>
          <AppButton color="success" type="gradient">
            Button
          </AppButton>
          <AppButton color="danger" type="gradient">
            Button
          </AppButton>
          <AppButton color="dark" type="gradient">
            Button
          </AppButton>
          <AppButton color="secondary" type="gradient">
            Button
          </AppButton>
          <AppButton color="info" type="gradient">
            Button
          </AppButton>
        </div>
      </AppCard>
    </>
  )
}

export default GradientButton
