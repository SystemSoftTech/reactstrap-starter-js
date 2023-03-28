import React from "react"
import { Col, Row } from "reactstrap"
import AppInput from "@components/Inputs"
import AppMask from "@components/Masks"

const FormHookFloating = (formData) => {
  const { control, errors, formField } = formData
  const { email, password, phone, amount, bio } = formField

  return (
    <Row className="mt-2">
      <Col md={6}>
        <AppInput
          type={email.type}
          label={email.label}
          id={`${email.name}2`}
          control={control}
          name={email.name}
          placeholder={email.placeholder}
          errors={errors.email}
          required={true}
          floating={true}
        />
      </Col>
      <Col md={6}>
        <AppInput
          type={password.type}
          label={password.label}
          id={`${password.name}2`}
          control={control}
          name={password.name}
          errors={errors.password}
          placeholder={password.placeholder}
          required={true}
          floating={true}
        />
      </Col>
      <Col md={6}>
        <AppMask
          label={phone.label}
          id={`${phone.name}2`}
          control={control}
          name={phone.name}
          errors={errors.phone}
          placeholder={phone.placeholder}
          required={true}
          floating={true}
          options={{ phone: true, phoneRegionCode: "US" }}
        />
      </Col>
      <Col md={6}>
        <AppInput
          type={amount.type}
          label={amount.label}
          id={`${amount.name}2`}
          control={control}
          name={amount.name}
          errors={errors.amount}
          placeholder={amount.placeholder}
          required={true}
          floating={true}
        />
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
          id={`${bio.name}2`}
          isLimit={true}
          maxLength={200}
          floating={true}
          cols={3}
          rows={3}
        />
      </Col>
    </Row>
  )
}

export default FormHookFloating
