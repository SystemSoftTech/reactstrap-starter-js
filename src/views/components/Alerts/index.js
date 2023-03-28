import { useEffect, useState } from "react"
import { AlertCircle, AlertTriangle, CheckCircle } from "react-feather"
import { Alert } from "reactstrap"
import PropTypes from 'prop-types'

const AppAlert = ({
  heading,
  children,
  color,
  toggle,
  timer,
  icon,
  isOpen
}) => {
  // ** State
  const [visible, setVisible] = useState(isOpen)

  // ** Toggle
  useEffect(() => {
    setVisible(isOpen)
    if (timer && isOpen) {
      const _setTime = setTimeout(() => {
        setVisible(!visible)
        if (toggle) toggle(false)
      }, timer)

      return () => {
        clearTimeout(_setTime)
      }
    }
  }, [isOpen, visible, timer, toggle])

  const Icons = () => {
    switch (color) {
      case "success":
        return <CheckCircle />
      case "warning":
        return <AlertTriangle />
      case "danger":
        return <AlertTriangle />
      default:
        return <AlertCircle />
    }
  }

  const toggleAlert = () => {
    if (toggle) toggle(false)
  }

  return (
    <div className="demo-spacing-0">
      <Alert
        color={color}
        isOpen={visible}
        toggle={toggle ? toggleAlert : undefined}
        className="mb-2"
      >
        {heading ? <h4 className="alert-heading">{heading}</h4> : null}
        <div className="alert-body">
          {icon ? Icons() : null}
          <span className={icon ? "ms-1 align-middle" : ""}>{children}</span>
        </div>
      </Alert>
      {/* {toggle ? (
        <Alert
          color={color}
          isOpen={visible}
          toggle={toggleAlert ?? null}
          className="mb-2"
        >
          {heading ? <h4 className="alert-heading">{heading}</h4> : null}
          <div className="alert-body">
            {icon === false ? null : Icons()}
            <span className="ms-1 align-middle">{children}</span>
          </div>
        </Alert>
      ) : (
        <Alert color={color} isOpen={visible} className="mb-2">
          <div className="alert-body">
            {icon === false ? null : Icons()}
            <span className={`${icon === false ? "" : "ms-1"} align-middle`}>
              {children}
            </span>
          </div>
        </Alert>
      )} */}
    </div>
  )
}

AppAlert.propTypes = {
  heading: PropTypes.any,
  children: PropTypes.any.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark']).isRequired,
  toggle: PropTypes.func,
  timer: PropTypes.number,
  icon: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired
}

export default AppAlert
