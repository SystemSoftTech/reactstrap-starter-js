import React from "react"
import {
  DollarSign,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  User
} from "react-feather"
import { Col, Row } from "reactstrap"
import AppCheckbox from "@components/CheckBox"
import AppInput from "@components/Inputs"
import AppMask from "@components/Masks"
import AppSelect from "@components/Selects"

const FormHookIcon = (formData) => {
  const { control, errors, formField } = formData
  const { email, password, phone, amount, bio, gender, interest, rememberMe } =
    formField
  return (
    <Row>
      <Col md={6}>
        <AppInput
          type={email.type}
          label={email.label}
          id={`${email.name}1`}
          control={control}
          name={email.name}
          placeholder={email.placeholder}
          errors={errors.email}
          required={true}
          message={email.message}
          icon={<Mail size={14} />}
        />
      </Col>
      <Col md={6}>
        <AppInput
          type={password.type}
          label={password.label}
          id={`${password.name}1`}
          control={control}
          name={password.name}
          errors={errors.password}
          placeholder={password.placeholder}
          required={true}
          message={password.message}
          icon={<Lock size={14} />}
        />
      </Col>
      <Col md={6}>
        <AppMask
          label={phone.label}
          control={control}
          name={phone.name}
          errors={errors.phone}
          placeholder={phone.placeholder}
          message={phone.message}
          id={`${phone.name}1`}
          icon={<Phone size={14} />}
          regionCode="US +1"
          options={{ phone: true, phoneRegionCode: "US" }}
        />
      </Col>
      <Col md={6}>
        <AppMask
          label={amount.label}
          control={control}
          name={amount.name}
          errors={errors.amount}
          placeholder={amount.placeholder}
          message={amount.message}
          id={`${amount.name}1`}
          icon={<DollarSign size={14} />}
          options={{ numeral: true, numeralThousandsGroupStyle: "thousand" }}
        />
      </Col>
      <Col md={6}>
        <AppInput
          label={gender.label}
          name={gender.name}
          type={gender.type}
          id={`${gender.name}1`}
          control={control}
          required={true}
          options={gender.options}
          errors={gender.errorMsg}
          icon={<User size={14} />}
        ></AppInput>
      </Col>
      <Col md={6}>
        <AppSelect
          label="Interest"
          required={true}
          name="interest"
          placeholder={interest.placeholder}
          control={control}
          // isMulti={true}
          options={[
            { value: "ocean", label: "Ocean" },
            { value: "blue", label: "Blue" },
            { value: "purple", label: "Purple" },
            { value: "red", label: "Red" },
            { value: "orange", label: "Orange" }
          ]}
        ></AppSelect>
      </Col>
      <Col md={6}>
        <AppCheckbox
          id={`${rememberMe.name}1`}
          label={rememberMe.label}
          control={control}
          name={rememberMe.name}
          isSwitch={true}
          isSwitchIcon={true}
          inline={true}
          required={true}
        ></AppCheckbox>
      </Col>
      <Col md={12}>
        <AppInput
          type={bio.type}
          label={bio.label}
          control={control}
          name={bio.name}
          errors={errors.bio}
          placeholder={bio.placeholder}
          required={true}
          message={bio.message}
          id={`${bio.name}1`}
          isLimit={true}
          maxLength={200}
          icon={<MessageSquare size={14} />}
          cols={3}
          rows={3}
        />
      </Col>
    </Row>
  )
}

export default FormHookIcon
