import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const RoundButton = () => {
  return (
    <>
      {/* Rounded Buttons */}
      <AppCard title="Rounded">
        <div className="demo-inline-spacing">
          <AppButton color="primary" type="outline" outline round>
            Button
          </AppButton>
          <AppButton color="warning" type="outline" outline round>
            Button
          </AppButton>
          <AppButton color="success" type="outline" outline round>
            Button
          </AppButton>
          <AppButton color="danger" type="outline" outline round>
            Button
          </AppButton>
          <AppButton color="dark" type="outline" outline round>
            Button
          </AppButton>
          <AppButton color="secondary" type="outline" outline round>
            Button
          </AppButton>
          <AppButton color="info" type="outline" outline round>
            Button
          </AppButton>
        </div>
      </AppCard>
    </>
  )
}

export default RoundButton
