import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

const BlockLevel = () => {
  return (
    <>
      {/* Block Level Buttons */}
      <AppCard title="Block Levels">
        <div className="demo-inline-spacing">
          <div className="col">
            <AppButton color="primary" type="fill" icon={true} block={true}>
              <span className="align-middle ms-1">Button</span>
            </AppButton>
          </div>
          <div className="col">
            <AppButton color="warning" type="outline" round={true} block={true}>
              <span className="align-middle ms-1">Button</span>
            </AppButton>
          </div>
        </div>
      </AppCard>
    </>
  )
}

export default BlockLevel
