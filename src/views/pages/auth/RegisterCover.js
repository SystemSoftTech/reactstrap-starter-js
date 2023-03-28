// ** React Imports
import { Link } from "react-router-dom"

// ** Third Party Components
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

// ** Custom Components
import PasswordToggle from "@components/PasswordToggle"
import AppInput from "@components/Inputs"
import AppCheckbox from "@components/CheckBox"

// ** Reactstrap Imports
import { Col, CardTitle, CardText, Button, Form } from "reactstrap"

// ** Styles
import "@styles/react/pages/page-authentication.scss"
// ** Images
import source from "@assets/images/pages/login-v2-dark.svg"
// ** Validations
import { registerValidations } from "./schemas/validations"

const defaultValues = {
  email: "",
  terms: false,
  username: "",
  password: ""
}

const RegisterCover = () => {
  // ** Hooks
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(registerValidations[0])
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="auth-wrapper auth-cover">
      <div className="d-flex auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <h2 className="brand-text text-primary ms-1">Demo App</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-2">
              Adventure starts here 🚀
            </CardTitle>
            <CardText className="mb-2">
              Make your app management easy and fun!
            </CardText>

            <Form
              action="/"
              className="auth-register-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <AppInput
                  type="username"
                  label="Username"
                  control={control}
                  value=""
                  id="username"
                  name="username"
                  placeholder="Username"
                  required={true}
                />
              </div>
              <div className="mb-1">
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
              </div>
              <div className="mb-1">
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
              <AppCheckbox
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
              />
              <Button type="submit" block color="primary">
                Sign up
              </Button>
            </Form>
            <p className="text-center mt-3">
              <span className="me-25">Already have an account?</span>
              <Link to="/login">
                <span>Sign in instead</span>
              </Link>
            </p>
          </Col>
        </Col>
      </div>
    </div>
  )
}

export default RegisterCover
