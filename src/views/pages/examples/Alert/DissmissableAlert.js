import { useState } from "react"
import AppAlert from "@components/Alerts"
import AppCard from "@components/Cards"

const DissmissableAlert = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Dismissable Alert */}
      <AppCard title="Dismissable Alert">
        <p>
          Using <code>isOpen</code> and <code>toggle</code> you can create a
          dismissable alert based on timer.
        </p>
        <AppAlert
          isOpen={isOpen}
          color="primary"
          timer={5000}
          toggle={setIsOpen}
        >
          Good Morning! Start your day with some alerts.
        </AppAlert>
        <button
          style={{ width: 180 }}
          className="btn btn-primary mt-2"
          onClick={() => setIsOpen(true)}
          disabled={isOpen}
        >
          Click to show
        </button>
      </AppCard>
    </>
  )
}

export default DissmissableAlert
