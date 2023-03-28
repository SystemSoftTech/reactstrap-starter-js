// ** React Imports
import { Link } from "react-router-dom"

// ** Third Party Components
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import PasswordToggle from "@components/PasswordToggle"

// ** Reactstrap Imports
import {
  Col,
  Form,
  Input,
  Label,
  Button,
  CardText,
  CardTitle
} from "reactstrap"

// ** Components
import AppInput from "@components/Inputs"

// ** Styles
import "@styles/react/pages/page-authentication.scss"

// ** Images
import source from "@assets/images/pages/login-v2-dark.svg"

// ** Utils
import { AppConstant } from "@utils"

const defaultValues = {
  email: "",
  password: ""
}

const validations = [
  Yup.object().shape({
    [defaultValues.email]: Yup.string()
      .required("Email is required.")
      .matches(AppConstant.SingleEmailRegex, "Your email is invalid."),
    [defaultValues.password]: Yup.string()
      .required("Password is required.")
      .min(6, "Password should be at least 6 characters")
  })
]

const LoginCover = () => {
  // ** Hooks
  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validations[0])
  })
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="auth-wrapper auth-cover">
      <div className="auth-inner d-flex">
        <Link
          className="brand-logo"
          to="/"
          onClick={(e) => e.preventDefault()}
        >
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
            <div style={{ marginBottom: 100 }}>
              <CardTitle tag="h2" className="fw-bold mb-1">
                Welcome to Demo App! 👋
              </CardTitle>
              <CardText className="mb-2">
                Please sign-in to your account and start the adventure
              </CardText>
            </div>
            {/* <Alert color="primary">
              <div className="alert-body font-small-2">
                <p>
                  <small className="me-50">
                    <span className="fw-bold">Admin:</span> admin@demo.com |
                    admin
                  </small>
                </p>
                <p>
                  <small className="me-50">
                    <span className="fw-bold">Client:</span> client@demo.com |
                    client
                  </small>
                </p>
              </div>
              <HelpCircle
                id="login-tip"
                className="position-absolute"
                size={18}
                style={{ top: "10px", right: "10px" }}
              />
              <UncontrolledTooltip target="login-tip" placement="left">
                This is just for ACL demo purpose.
              </UncontrolledTooltip>
            </Alert> */}
            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                {/* <Label className="form-label" for="login-email">
                  Email
                </Label> */}
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
                <div className="float-end">
                  {/* <Label className="form-label" for="login-password">
                    Password
                  </Label> */}
                  <Link to="/forgot-password">
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
              <div className="form-check mb-2">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Remember Me
                </Label>
              </div>
              <Button type="submit" color="primary" block>
                Sign in
              </Button>
            </Form>
            <p className="text-center mt-4">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
          </Col>
        </Col>
      </div>
    </div>
  )
}

export default LoginCover
