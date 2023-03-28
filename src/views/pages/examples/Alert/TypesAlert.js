import { useState } from "react"
import AppAlert from "@components/Alerts"
import AppCard from "@components/Cards"

const TypesAlert = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <AppCard title="Alerts with Different Types">
      <p>
        Using <code>isOpen</code> and <code>toggle</code> you can create a
        dismissable.
      </p>

      {/* Alert with Heading */}
      <AppAlert
        isOpen={isOpen}
        color="primary"
        toggle={() => setIsOpen(false)}
        heading="Alert Heading"
      >
        Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon.
        Liquorice fruitcake apple pie I love cupcake cupcake.
      </AppAlert>

      {/* Alert with Content */}
      <AppAlert isOpen={true} color="success" icon={false}>
        <h2 className="text-success">Well done!</h2>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </AppAlert>

      <AppAlert isOpen={true} color="warning">
        Good Morning! Start your day with some alerts.
      </AppAlert>

      <AppAlert isOpen={true} color="danger">
        Good Morning! Start your day with some alerts.
      </AppAlert>
      <AppAlert isOpen={true} color="info">
        Good Morning! Start your day with some alerts.
      </AppAlert>
      <AppAlert isOpen={true} color="secondary" icon={false}>
        Good Morning! Start your day with some alerts.
      </AppAlert>
      <AppAlert isOpen={true} color="dark" icon={false}>
        Good Morning! Start your day with some alerts.
      </AppAlert>
    </AppCard>
  )
}

export default TypesAlert
