import { Col, Row } from "reactstrap"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import AppCard from "@components/Cards"
import AppButton from "@components/Buttons"

import FormHookIcon from "./FormHookIcon"
import form from "./schemas/form"
import validations from "./schemas/validations"

const FormHookIconExample = () => {
  const { formId, formField } = form
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validations[0])
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset({
      email: "",
      password: "",
      phone: "",
      amount: "",
      bio: "",
      gender: ""
    })
  }

  function PreFill() {
    reset({
      email: "test@example.com",
      password: "Asd123!@#",
      phone: +923103489943,
      amount: 10.01,
      bio: "This is a testing body.",
      gender: "male",
      interest: { value: "red", label: "Red" },
      rememberMe: true
    })
  }

  return (
    <Row>
      <Col md="6">
        <AppCard title="React Hook From using Yup validators">
          <form id={formId + 1} onSubmit={handleSubmit(onSubmit)}>
            <AppButton color="success" type="outline" size="sm" handleClick={PreFill}>
              Pre Fill
            </AppButton>
            <br />
            <br />
            <FormHookIcon control={control} formField={formField} errors={errors} />
            <AppButton type="fill" color="primary" isSubmit={true}>
              Submit
            </AppButton>
          </form>
        </AppCard>
      </Col>
    </Row>
  )
}

export default FormHookIconExample
