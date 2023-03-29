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
import { Card, CardBody, CardTitle, CardText, Form, Button } from "reactstrap"

// ** Styles
import "@styles/react/pages/page-authentication.scss"
import { resetPasswordValidations } from "./schemas/validations"

// Images
import templetop from "assets/images/pages/temple-top.svg"

const ResetPasswordBasic = () => {
  // ** Hooks
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(resetPasswordValidations[0])
  })
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="auth-wrapper auth-basic px-2" style={{background: "linear-gradient(180deg, #7D1717 0%, #F48037 100%)"}}>
      <div className="auth-inner my-2">
      <div className="text-center">
        <img src={templetop} width="80%" style={{position:"relative", bottom:"-1px"}} />
        </div>
        <Card className="mb-0" style={{background:"#43120f", borderRadius:"30px"}}>
          <CardBody>
            <Link className="brand-logo" to="/">
              <h2 className="brand-text text-primary ms-1">Reset Password</h2>
            </Link>
            {/* <CardTitle tag="h4" className="mb-1">
              Reset Password 🔒
            </CardTitle>
            <CardText className="mb-2">
              Your new password must be different from previously used passwords
            </CardText> */}
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
                showStandard={true}
                placeholder="*******"
                required={true}
              />
              <PasswordToggle
                label="Conform Password"
                control={control}
                name="confirmPassword"
                id="confirmPassword"
                // isClose={true}
                // hideIcon={true}
                showStandard={true}
                placeholder="*******"
                required={true}
              />
              <Button type="submit" color="primary" block>
                Set New Password
              </Button>
            </Form>
            <p className="text-center mt-2">
              <Link to="/login">
                <ChevronLeft className="rotate-rtl me-25" size={14} />
                <span className="align-middle">Back to login</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ResetPasswordBasic
