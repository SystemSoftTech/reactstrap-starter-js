// ** Third Party Components
import PropTypes from "prop-types"
import Flatpickr from "react-flatpickr"
import { Controller } from "react-hook-form"
import classnames from "classnames"
import { FormFeedback, InputGroup, InputGroupText, Label } from "reactstrap"
import { format } from "date-fns"

// Flat picker styles
import "../../../@core/scss/react/libs/flatpickr/flatpickr.scss"

import { Calendar, Clock } from "react-feather"

const AppDatePicker = ({
  label,
  onChangeEvent,
  onKeyPressEvent,
  onKeyUpEvent,
  name,
  required,
  icon,
  noCalendar,
  id,
  enableTime,
  control,
  minDate,
  formatDate,
  value,
  tooltip,
  ...rest
}) => {
  // const [picker, setPicker] = useState<Date[] | Date>(value ?? null)

  return (
    <Controller
      render={({
        field,
        fieldState: { invalid, isTouched, isDirty, error }
      }) => (
        <div className={classnames("mb-3", { "position-relative": tooltip })}>
          {label ? (
            <Label htmlFor={id}>
              {label}{" "}
              {required ? <small className="text-danger">*</small> : null}
            </Label>
          ) : null}
          <InputGroup className={classnames("input-group-merge", { "is-invalid": error })} style={{ zIndex: 2 }}>
            {icon ? (
              <InputGroupText className={classnames("border-end-0", { "text-danger": error })}>{icon}</InputGroupText>
            ) : null}
            <Flatpickr
              {...field}
              {...rest}
              id={id}
              className={classnames("form-control flatpickr-input", { "is-invalid": (isTouched || isDirty || error) && invalid })}
              style={{ borderRadius: "0.357rem" }}
              onChange={(e) => onChangeEvent ? onChangeEvent(e[0]) : field.onChange(format(e[0], "yyyy/MM/dd"))}
              options={{
                dateFormat: formatDate ?? "Y-m-d",
                minDate: minDate ?? undefined,
                enableTime: enableTime ?? false,
                noCalendar: noCalendar ?? false
              }}
            />
            <InputGroupText
              className="border-start-0"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                zIndex: -1,
                paddingRight: 10
              }}
            >
              {enableTime ? <Clock size="16" color="#bfbfc0" /> : <Calendar size="15" color="#bfbfc0" />}
            </InputGroupText>
          </InputGroup>
          {error && (
            <FormFeedback tooltip={tooltip ?? false}>
              {error.message}
            </FormFeedback>
          )}
        </div>
      )}
      name={name}
      control={control}
      rules={{ required: required ?? false }}
      defaultValue={value ?? null}
    />
  )
}

// ** PropTypes
AppDatePicker.propTypes = {
  label: PropTypes.string,
  onChangeEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onKeyUpEvent: PropTypes.func,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  icon: PropTypes.node,
  noCalendar: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enableTime: PropTypes.bool,
  control: PropTypes.any.isRequired,
  minDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  formatDate: PropTypes.oneOfType([PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tooltip: PropTypes.bool
}

export default AppDatePicker
