import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const ReliefButton = () => {
  return (
    <>
      {/* Relief Buttons */}
      <AppCard title="Relief">
        <div className="demo-inline-spacing">
          <AppButton color="primary" type="relief">
            Button
          </AppButton>
          <AppButton color="warning" type="relief">
            Button
          </AppButton>
          <AppButton color="success" type="relief">
            Button
          </AppButton>
          <AppButton color="danger" type="relief">
            Button
          </AppButton>
          <AppButton color="dark" type="relief">
            Button
          </AppButton>
          <AppButton color="secondary" type="relief">
            Button
          </AppButton>
          <AppButton color="info" type="relief">
            Button
          </AppButton>
        </div>
      </AppCard>
    </>
  )
}

export default ReliefButton
