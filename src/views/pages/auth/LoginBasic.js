// ** React Imports
import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

// ** Third Party Components
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Slide, toast } from "react-toastify"
import { Coffee } from "react-feather"

// ** Custom Components
import PasswordToggle from "@components/PasswordToggle"
import AppInput from "@components/Inputs"
import AppCheckbox from "@components/CheckBox"

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form } from "reactstrap"

// ** Styles
import "@styles/react/pages/page-authentication.scss"
import "@styles/react/libs/toastify/toastify.scss"

// ** Validations
import { loginValidations } from "./schemas/validations"

// ** Actions
import { AuthLogin } from "@store/actions/auth"
import AppButton from "@components/Buttons"
import AppAlert from "@components/Alerts"

// ** React Toastify
import Avatar from "@components/Avatar"


const ToastContent = ({ name, role }) => (
  <>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        <h6 className="toast-title fw-bold">Welcome, {name}</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>
        You have successfully logged in as an {role} user to Demo. Now you can
        start to explore. Enjoy!
      </span>
    </div>
  </>
)

const LoginBasic = () => {
  // // ** Navigation
  const history = useHistory()
  // const navigate = useNavigate()
  // ** State
  const [isSubmit, setIsSubmit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState(null)
  // Dispatch Actions
  const dispatch = useDispatch()

  // ** Hooks
  const { control, handleSubmit, setValue, reset } = useForm({
    resolver: yupResolver(loginValidations[0])
  })

  // ** OnInit Function
  useEffect(() => {
    reset({
      email: "",
      password: "",
      rememberMe: true
    })
  }, [reset])

  const Login = async (data) => {
    return await dispatch(AuthLogin(data))
  }

  const onSubmit = (data) => {
    setIsSubmit(true)
    // debugger
    const payload = {
      Username: data.email,
      Password: data.password
    }
    Login(payload)
      .then((result) => {
        // debugger
        setIsSubmit(false)
        // const responseParse = JSON.parse(atob(result.token.split('.')[1]))
        // localStorage.setItem('userData', JSON.stringify(responseParse))
        // localStorage.setItem("TOKEN", result)
        // localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(action.payload.refreshToken))
        localStorage.setItem('userDetails', JSON.stringify(result))
        localStorage.setItem("authToken", result.AuthToken)
        localStorage.setItem("refreshToken", result.RefreshToken)
        localStorage.setItem("FullName", result.FullName)
        localStorage.setItem("Email", result.Email)
        history.push("/home")
        toast.success(<ToastContent name={"John Doe"} role={"admin"} />, {
          icon: false,
          transition: Slide,
          hideProgressBar: true,
          autoClose: 2000
          // theme: "colored"
        })
      })
      .catch((err) => {
        setIsOpen(true)
        setIsSubmit(false)
        setError(err.message)
      })
  }

  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <h2 className="brand-text text-primary ms-1">Demo App</h2>
            </Link>
            <CardTitle tag="h4" className="mb-1">
              Welcome to Demo App! 👋
            </CardTitle>
            <CardText className="mb-2">
              Please sign-in to your account and start the adventure
            </CardText>
            {error && <AppAlert
              isOpen={isOpen}
              color="danger"
              timer={10000}
              toggle={setIsOpen}
            >
              {error}
            </AppAlert>}
            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <AppInput
                type="email"
                label="Email"
                control={control}
                value=""
                id="email"
                name="email"
                placeholder="Email"
                required={true}
              />
              <div>
                <div className="float-end">
                  <Link to="/reset-password">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <PasswordToggle
                  label="Password"
                  control={control}
                  name="password"
                  id="password"
                  // isClose={true}
                  // hideIcon={true}
                  // showStandard={true}
                  placeholder="*******"
                  required={true}
                />
              </div>
              <div className="mt-n2">
                <AppCheckbox
                  id="rememberMe"
                  control={control}
                  name="rememberMe"
                  setValue={setValue}
                  checkboxLabel="Remember Me"
                  checked={true}
                  // color="warning"
                  // isSwitch={true}
                  // isSwitchIcon={true}
                  inline={true}
                  required={true}
                />
              </div>
              <AppButton
                color="primary"
                block
                isSubmit
                type="fill"
                disabled={isSubmit}
                spinner={isSubmit}
                spinnerType="border"
              >
                Sign in
              </AppButton>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default LoginBasic
