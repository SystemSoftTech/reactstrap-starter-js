import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const FillButton = () => {
  return (
    <>
      {/* Fills Buttons */}
      <AppCard title="Fill Buttons">
        <div className="demo-inline-spacing">
          <AppButton
            color="primary"
            type="fill"
            handleClick={() => alert("clicking")}
          >
            Button
          </AppButton>
          <AppButton color="warning" type="fill">
            Button
          </AppButton>
          <AppButton color="success" type="fill">
            Button
          </AppButton>
          <AppButton color="danger" type="fill">
            Button
          </AppButton>
          <AppButton color="dark" type="fill">
            Button
          </AppButton>
          <AppButton color="secondary" type="fill">
            Button
          </AppButton>
          <AppButton color="info" type="fill">
            Button
          </AppButton>
        </div>
      </AppCard>
    </>
  )
}

export default FillButton
