import React from "react"
import { Col, Row } from "reactstrap"
import AppInput from "@components/Inputs"
import PasswordToggle from "@components/PasswordToggle"
import AppSelect from "@components/Selects"
import AppCheckbox from "@components/CheckBox"
import AppRadio from "@components/Radios"
import AppDatePicker from "@components/DatePickers"

// ** Components

const FormHook = (formData) => {
  const { control, formField, setValue } = formData
  const {
    email,
    password,
    phone,
    amount,
    bio,
    gender,
    interest,
    preference,
    jobType,
    dob,
    time
  } = formField
  return (
    <Row>
      <Col md={6}>
        <AppInput
          type={email.type}
          label={email.label}
          control={control}
          id={email.name}
          name={email.name}
          placeholder={email.placeholder}
          required={true}
        // onKeyUpEvent={(e: any) =>
        //   console.log(e.target.value)
        // }
        // onKeyPressEvent={(e: any) =>
        //   console.log(e.target.value)
        // }
        />
      </Col>
      <Col md={6}>
        <PasswordToggle
          label={password.label}
          control={control}
          name={password.name}
          id={password.name}
          // isClose={true}
          // hideIcon={true}
          showStandard={true}
          placeholder={password.placeholder}
          required={true}
        />
      </Col>
      <Col md={6}>
        <AppInput
          type={phone.type}
          label={phone.label}
          control={control}
          name={phone.name}
          id={phone.name}
          placeholder={phone.placeholder}
          required={true}
        />
      </Col>
      <Col md={6}>
        <AppInput
          type={amount.type}
          label={amount.label}
          control={control}
          name={amount.name}
          id={amount.name}
          placeholder={amount.placeholder}
          required={true}
        />
      </Col>
      <Col md={6}>
        <AppInput
          label={gender.label}
          name={gender.name}
          type={gender.type}
          id={gender.name}
          control={control}
          required={true}
          options={gender.options}
        ></AppInput>
      </Col>
      <Col md={6}>
        <AppSelect
          label="Interest"
          required={true}
          name="interest"
          placeholder={interest.placeholder}
          control={control}
          options={interest.options}
          isMulti
        ></AppSelect>
      </Col>
      <Col md={6}>
        <AppCheckbox
          id={preference.name}
          label={preference.label}
          control={control}
          name={preference.name}
          setValue={setValue}
          checkboxLabel="Developer"
          // color="warning"
          // isSwitch={true}
          // isSwitchIcon={true}
          inline={true}
          required={true}
          options={["Frontend", "FullStack"]}
        ></AppCheckbox>
      </Col>
      <Col md={6}>
        <AppRadio
          id={jobType.name}
          label={jobType.label}
          control={control}
          name={jobType.name}
          setValue={setValue}
          // color="info"
          inline={true}
          required={true}
          options={jobType.options}
        ></AppRadio>
      </Col>
      <Col md={6}>
        <AppDatePicker
          id={dob.name}
          name={dob.name}
          control={control}
          label={dob.label}
          required={true}
          placeholder="YYYY-MM-DD"
        // enableTime={true}
        // noCalendar={true}
        // formatDate="h:i K"
        ></AppDatePicker>
      </Col>
      <Col md={6}>
        <AppDatePicker
          id={time.name}
          name={time.name}
          control={control}
          label={time.label}
          required={true}
          placeholder="HH:MM"
          enableTime={true}
          noCalendar={true}
          formatDate="h:i K"
        ></AppDatePicker>
      </Col>
      <Col md={12}>
        <AppInput
          type={bio.type}
          label={bio.label}
          control={control}
          name={bio.name}
          id={bio.name}
          placeholder={bio.placeholder}
          required={true}
          isLimit={true}
          maxLength={200}
          cols={3}
          rows={3}
        />
      </Col>
    </Row>
  )
}

export default FormHook
