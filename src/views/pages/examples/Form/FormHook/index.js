import { useForm } from "react-hook-form"
import { Col, Row } from "reactstrap"
import { yupResolver } from "@hookform/resolvers/yup"

import AppButton from "@components/Buttons"
import AppCard from "@components/Cards"

import FormHook from "./FormHook"
import validations from "./schemas/validations"
import form from "./schemas/form"

const FormHookExample = () => {
  const { formId, formField } = form
  const {
    control,
    handleSubmit,
    // watch,
    setValue,
    reset } = useForm({
      resolver: yupResolver(validations[0])
    })

  // const value = watch()

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
      interest: [{ value: "react", label: "React" }],
      preference: ["FullStack"],
      jobType: "Onsite",
      dob: "2022/11/09",
      time: new Date()
    })
  }

  return (
    <Row>
      <Col md="6">
        <AppCard title="React Hook From using Yup validators">
          <form id={formId} onSubmit={handleSubmit(onSubmit)}>
            <AppButton color="success" type="outline" size="sm" handleClick={PreFill}>Pre Fill</AppButton>
            <br />
            <br />
            <FormHook control={control} formField={formField} setValue={setValue} />
            <AppButton type="fill" color="primary" isSubmit={true}>
              Submit
            </AppButton>
          </form>
        </AppCard>
      </Col>
    </Row>
  )
}

export default FormHookExample
