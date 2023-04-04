// ** React Imports
import { Link, useHistory} from "react-router-dom"
import {DollarSign,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  User} from "react-feather"
  import { useEffect, useState } from "react"

// ** Third Party Components
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Slide, toast } from "react-toastify"

// NewUser layout schemas for form and form feilds
import { request } from "@store/actions/auth/request"

// ** Custom Components
import PasswordToggle from "@components/PasswordToggle"
import AppInput from "@components/Inputs"
import AppCheckbox from "@components/CheckBox"
import AppButton from "@components/Buttons"
import AppMask from "@components/Masks"

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button, Form } from "reactstrap"

// ** Styles
import "@styles/react/pages/page-authentication.scss"
// ** Validations
import { registerValidations } from "./schemas/validations"

// Images
import templetop from "assets/images/pages/temple-top.svg"
// ** React Toastify
import Avatar from "@components/Avatar"

const ToastContent = ({ name, role }) => (
  <>
    <div className="toastify-header">
      {/* <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title fw-bold">Welcome, {name}</h6>
      </div> */}
    </div>
    <div className="toastify-body">
      <span>
      Email ID already exists in system
      </span>
    </div>
  </>
)
const defaultValues = {
  FirstName:"",
  LastName:"",
  EmailAddress: "",
  // terms: false,
  // username: "",
  Password: ""
}

const RegisterBasic = () => {
  const history = useHistory()
  const [isSubmit, setIsSubmit] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  // ** Hooks
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(registerValidations[0])
  })

  const onSubmit = async (defaultValues, actions) => {
    setIsSubmit(true)
    request('Users/PostExternalUser', 'POST', defaultValues)
    .then(res => console.log(res.defaultValues))
    .then(async (result) => {
      history.push("/verify-email")
    })
    .catch(error => {
      toast.error(<ToastContent />, {
        icon: false,
        transition: Slide,
        hideProgressBar: true,
        autoClose: 2000
        // theme: "colored"
      })
      return error
    })
  }

  return (
    <div className="auth-wrapper auth-basic px-2" style={{background: "linear-gradient(180deg, #7D1717 0%, #F48037 100%)"}}>
      <div className="auth-inner my-2">
      <div className="text-center">
        <img src={templetop} width="80%" style={{position:"relative", bottom:"-1px"}} />
        </div>
        <Card className="mb-0"  style={{background:"#43120f", borderRadius:"30px"}}>
          <CardBody>
            <Link
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <h2 className="brand-text text-primary ms-1">Sign Up</h2>
            </Link>
            {/* <CardTitle tag="h4" className="mb-1">
              Adventure starts here 🚀
            </CardTitle>
            <CardText className="mb-2">
              Make your app management easy and fun!
            </CardText> */}
            <Form
              className="auth-register-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <AppInput
                  type="text"
                  label="FirstName"
                  control={control}
                  value=""
                  id="FirstName"
                  name="FirstName"
                  placeholder="FirstName"
                  required={true}
                />
              </div>
              <div className="mb-1">
                <AppInput
                  type="text"
                  label="LastName"
                  control={control}
                  value=""
                  id="LastName"
                  name="LastName"
                  placeholder="LastName"
                  required={true}
                />
              </div>
              <div className="mb-1">
                  <AppInput
                    type="email"
                    label="EmailAddress"
                    control={control}
                    value=""
                    id="EmailAddress"
                    name="EmailAddress"
                    placeholder="EmailAddress"
                    required={true}
                  />
              </div>
              <div className="mb-1">
                <AppMask
                  type="phone"
                  label="PhoneNumber"
                  control={control}
                  value=""
                  id="PhoneNumber"
                  name="PhoneNumber"
                  placeholder="PhoneNumber"
                  icon={<Phone size={14} />}
                  regionCode="US +1"
          options={{ phone: true, phoneRegionCode: "US" }}
                  required={false}
                />
              </div>
              <div className="mb-1">
                <PasswordToggle
                  label="Password"
                  control={control}
                  name="Password"
                  id="Password"
                  // isClose={true}
                  // hideIcon={true}
                  showStandard={true}
                  placeholder="*******"
                  required={true}
                />
              </div>
              <div className="mb-1">
                <PasswordToggle
                  label="Conform Password"
                  control={control}
                  name="Password"
                  id="repeatePassword"
                  // isClose={true}
                  // hideIcon={true}
                  showStandard={true}
                  placeholder="*******"
                  required={true}
                />
              </div>
              {/* <AppCheckbox
                id="agree"
                control={control}
                name="agree"
                setValue={setValue}
                checkboxLabel={
                  <>
                    I agree to
                    <a
                      className="ms-25"
                      href="/"
                      onClick={(e) => e.preventDefault()}
                    >
                      privacy policy & terms
                    </a>
                  </>
                }
                // color="warning"
                // isSwitch={true}
                // isSwitchIcon={true}
                inline={true}
                required={true}
              /> */}
              <AppButton color="primary" 
               block
               isSubmit
               disabled={isSubmit}
               spinner={isSubmit}
               spinnerType="border"
              >
                Sign up
              </AppButton>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25 text-white">Already have an account?</span>
              <Link to="/login">
                <span>Sign in instead</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default RegisterBasic
