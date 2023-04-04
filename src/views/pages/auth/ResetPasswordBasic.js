// ** React Imports
import { Link, useHistory, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"


// ** Icons Imports
import { ChevronLeft } from "react-feather"

// ** Third Party Components
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

// ** Custom Components
import PasswordToggle from "@components/PasswordToggle"
import { request } from "@services/interceptors"

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Button } from "reactstrap"

// ** Styles
import "@styles/react/pages/page-authentication.scss"
import { resetPasswordValidations } from "./schemas/validations"

// Images
import templetop from "assets/images/pages/temple-top.svg"


const ResetPasswordBasic = () => {
  // function useQuery() {
  //   const { search } = useLocation()
  //   return React.useMemo(() => new URLSearchParams(search), [search])
  //   }

  // useEffect(() => {
  //   let query = useQuery()
  //   console.log(query)

  //  }, [])
  // const history = useHistory()
  // const [searchParams] = useSearchParams()
  const { search } = useLocation()
  const [email, setEmail] = useState("")
  const [isSubmit, setIsSubmit] = useState(false)
  const [open, setOpen] = useState(false)
  const [isDanger, setIsDanger] = useState(false)
  const [error, setError] = useState("")
  const [timer, setTimer] = useState(7000)
  const [loading, setLoading] = useState(false)
  // ** Hooks
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(resetPasswordValidations[0])
  })
  const onSubmit = (values) => {
    setLoading(true)
    let code = searchParams.get("code")
    let email = searchParams.get("EmailId")
    if (code && email) {
      const payload = {
        Email: email,
        Code: code,
        Password: values.password,
        Username: email
      }
      request("Users/ChangePassword", "POST", payload)
        .then(() => {
          setLoading(false)
          setEmail(email)
          setOpen(false)
        })
        .catch((err) => {
          setOpen(true)
          setLoading(false)
          setError(err)
        })
    }
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
