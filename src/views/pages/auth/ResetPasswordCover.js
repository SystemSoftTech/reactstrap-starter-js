// ** React Imports
import { Link } from "react-router-dom"

// ** Icons Imports
import { ChevronLeft } from "react-feather"

// ** Third Party Components
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

// ** Custom Components
import PasswordToggle from "@components/PasswordToggle"
// ** Reactstrap Imports
import { Col, CardTitle, CardText, Form, Button } from "reactstrap"

// ** Styles
import "@styles/react/pages/page-authentication.scss"
import { resetPasswordValidations } from "./schemas/validations"
import source from "@assets/images/pages/login-v2-dark.svg"

const ResetPasswordCover = () => {
  // ** Hooks
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(resetPasswordValidations[0])
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
            <CardTitle tag="h2" className="fw-bold mb-1">
              Reset Password 🔒
            </CardTitle>
            <CardText className="mb-2">
              Your new password must be different from previously used passwords
            </CardText>
            <Form
              className="auth-reset-password-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <PasswordToggle
                label="Password"
                control={control}
                name="confirmPassword"
                id="confirmPassword"
                // isClose={true}
                // hideIcon={true}
                showStandard={true}
                placeholder="*******"
                required={true}
              />
              <Button color="primary" block>
                Set New Password
              </Button>
            </Form>
            <p className="text-center mt-2">
              <Link to="/login">
                <ChevronLeft className="rotate-rtl me-25" size={14} />
                <span className="align-middle">Back to login</span>
              </Link>
            </p>
          </Col>
        </Col>
      </div>
    </div>
  )
}

export default ResetPasswordCover
