import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const BasicButton = () => {
  return (
    <>
      {/* Basic Buttons */}
      <AppCard title="Basic Buttons">
        <div className="demo-inline-spacing">
          <AppButton color="primary" type="outline" outline>
            Button
          </AppButton>
          <AppButton color="warning" type="outline" outline>
            Button
          </AppButton>
          <AppButton color="success" type="outline" outline>
            Button
          </AppButton>
          <AppButton color="danger" type="outline" outline>
            Button
          </AppButton>
          <AppButton color="dark" type="outline" outline>
            Button
          </AppButton>
          <AppButton color="secondary" type="outline" outline>
            Button
          </AppButton>
          <AppButton color="info" type="outline" outline>
            Button
          </AppButton>
        </div>
      </AppCard>
    </>
  )
}

export default BasicButton
