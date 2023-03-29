// ** React Imports
import { Link } from 'react-router-dom'

// ** Icons Imports
import { ChevronLeft } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'

// Images
import templetop from "assets/images/pages/temple-top.svg"

// ** Styles
import '@styles/react/pages/page-authentication.scss'
const ForgotPasswordBasic = () => {
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
            <Form className='auth-forgot-password-form mt-2' onSubmit={e => e.preventDefault()}>
              <div className='mb-1'>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
              </div>
              <Button color='primary' block>
                Send reset link
              </Button>
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
