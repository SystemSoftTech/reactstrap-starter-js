// ** React Imports
import { Link, useHistory} from 'react-router-dom'
// ** Third Party Components
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { forgotPasswordValidations } from "./schemas/validations"
import { useEffect, useState } from "react"
import axios from 'axios'

// ** Icons Imports
import { ChevronLeft } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button  } from 'reactstrap'
import AppButton from "@components/Buttons"
import AppInput from "@components/Inputs"

// Images
import templetop from "assets/images/pages/temple-top.svg"

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const defaultValues = {
  // FirstName:"",
  // LastName:"",
  EmailAddress: ""
  // terms: false,
  // username: "",
  // Password: ""
}
const ForgotPasswordBasic = () => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [isSubmit, setIsSubmit] = useState(false)
  const [open, setOpen] = useState(false)
  const [isDanger, setIsDanger] = useState(false)
  const [error, setError] = useState("")
  const [timer, setTimer] = useState(7000)
  const [loading, setLoading] = useState(false)

// ** Hooks
const { control, handleSubmit } = useForm({
  resolver: yupResolver(forgotPasswordValidations[0])
  
})

const onSubmit = async (defaultValues) => {
  setIsSubmit(true)
  changePassword(null, defaultValues.EmailAddress)
}

function changePassword(isReset, EmailAddress) {
  axios
    .get(`${process.env.REACT_APP_AUTH_BASE_URL}Users/ForgotPassword?emailId=${EmailAddress}`)
    .then(() => {
       history.push("/forgotemail-sent")
      // setEmail(email)
      // setLoading(false)
      // setOpen(false)
      // setTimer(7000)
      // if (isReset) {
      //   // history.push("/reset-password")
      //   setIsDanger(false)
      //   setOpen(true)
      // }
    })
    .catch(({ response: { data: { Message } } }) => {
      setOpen(true)
      setIsDanger(true)
      setError(Message)
      setLoading(false)
      setTimer(null)
    })
}

  return (
    <div className='auth-wrapper auth-basic px-2' style={{background: "linear-gradient(180deg, #7D1717 0%, #F48037 100%)"}}>
      <div className='auth-inner my-2'>
      <div className="text-center">
        <img src={templetop} width="80%" style={{position:"relative", bottom:"-1px"}} />
        </div>
        <Card className='mb-0' style={{background:"#43120f", borderRadius:"30px"}}>
          <CardBody>
            <Link
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <h2 className="brand-text text-primary ms-1">Forgot Password?</h2>
            </Link>
            {/* <CardTitle tag='h4' className='mb-1'>
              Forgot Password? 🔒
            </CardTitle>
            <CardText className='mb-2'>
              Enter your email and we'll send you instructions to reset your password
            </CardText> */}
            <Form className='auth-forgot-password-form mt-2' 
            // onSubmit={e => e.preventDefault()}>
            onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-1'>
              <AppInput
                  type="email"
                  label="EmailAddress"
                  control={control}
                  // value=""
                  id="EmailAddress"
                  name="EmailAddress"
                  placeholder="EmailAddress"
                  required={true}
                />
                {/* <Label className='form-label' for='login-email'>
                  Email
                </Label> */}
                {/* <Input type='email' id='login-email' placeholder='john@example.com' autoFocus /> */}
              </div>
              <AppButton color='primary' 
              isSubmit
              spinner={isSubmit}
              block>
                Send reset link
              </AppButton>
            </Form>
            <p className='text-center mt-2'>
              <Link to='/login'>
                <ChevronLeft className='rotate-rtl me-25' size={14} />
                <span className='align-middle'>Back to login</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ForgotPasswordBasic
