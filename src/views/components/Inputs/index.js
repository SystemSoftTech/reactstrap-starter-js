import { useState } from "react"
import PropTypes from "prop-types"
import { Controller } from "react-hook-form"
import { FormFeedback, Input, InputGroupText, Label } from "reactstrap"
import classnames from "classnames"
import { AppConstant } from "@utils"

const AppInput = ({
  label,
  onChangeEvent,
  onKeyPressEvent,
  onKeyUpEvent,
  name,
  required,
  icon,
  size,
  type,
  id,
  maxLength,
  isLimit,
  control,
  isClose,
  min,
  max,
  floating,
  tooltip,
  options,
  ...rest
}) => {
  const [value, setValue] = useState("")
  function eventHandler(e) {
    setValue(e.target.value)
    if (onChangeEvent) onChangeEvent(e.target.value ?? null)
  }

  return (
    <>
      <Controller
        render={({
          field,
          fieldState: { invalid, isTouched, isDirty, error }
        }) => (
          <div
            className={classnames({
              "mb-5": floating,
              "mb-1": !floating,
              "position-relative": tooltip
            })}
          >
            {label && !floating ? (
              <Label htmlFor={id}>
                {label}{" "}
                {required ? <small className="text-danger">*</small> : null}
              </Label>
            ) : null}
            <div
              className={classnames({
                "input-group-merge": icon,
                "is-invalid": error,
                "form-floating": floating,
                "input-group": !floating && icon
              })}
            >
              {icon ? (
                <InputGroupText
                  className={classnames({ "text-danger": error })}
                >
                  {icon}
                </InputGroupText>
              ) : null}
              <Input
                {...rest}
                {...field}
                type={type}
                className={classnames({
                  "ps-0": icon && type === "textarea",
                  "text-capitalize": type === "select"
                })}
                maxLength={
                  type === "number" || type === "text"
                    ? maxLength ?? 38
                    : undefined
                }
                id={id}
                bsSize={size}
                invalid={(isTouched || isDirty || error) && invalid}
                onChange={(event) => {
                  if (
                    type === "number" ||
                    type === "text" ||
                    type === "textarea"
                  ) if (event.target.value.length > (maxLength ?? 38)) return false
                  field.onChange(event)
                  eventHandler(event)
                }}
                onKeyUp={(event) => {
                  if (onKeyUpEvent) onKeyUpEvent(event)
                }}
                onKeyPress={(event) => {
                  if (onKeyPressEvent) onKeyPressEvent(event)
                }}
              >
                {options && options.length > 0 ? (
                  <>
                    <option value={""}>Please Select...</option>
                    {options.map((v, i) => (
                      <option key={i} value={v} className="text-capitalize">
                        {v}
                      </option>
                    ))}
                  </>
                ) : null}
              </Input>
              {floating ? (
                <Label htmlFor={id}>
                  {label}{" "}
                  {required ? <small className="text-danger">*</small> : null}
                </Label>
              ) : null}
            </div>
            {isLimit ? (
              <span className={classnames("textarea-counter-value float-end")}>
                {value.length}/{maxLength ?? 38}
              </span>
            ) : null}
            {error && (
              <FormFeedback tooltip={tooltip ?? false}>
                {error.message}
              </FormFeedback>
            )}
          </div>
        )}
        name={name}
        control={control}
        rules={{
          required: required ?? false,
          min: min,
          max: max,
          pattern:
            type === "number"
              ? AppConstant.OnlyNumberRegex
              : type === "email"
                ? AppConstant.SingleEmailRegex
                : type === "password"
                  ? AppConstant.PasswordRegex
                  : undefined
        }}
        defaultValue={value}
      />
    </>
  )
}

AppInput.propTypes = {
  label: PropTypes.string,
  onChangeEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onKeyUpEvent: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.node,
  size: PropTypes.oneOf(["sm", "lg"]),
  type: PropTypes.oneOf(["number", "text", "phone", "email", "textarea", "tel", "password", "select"]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLimit: PropTypes.bool,
  control: PropTypes.any.isRequired,
  isClose: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  floating: PropTypes.bool,
  tooltip: PropTypes.bool,
  options: PropTypes.array
}

export default AppInput