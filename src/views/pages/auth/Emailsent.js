// ** React Imports
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { fetchUserInformation } from '@store/actions/auth/users'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

// Header
import HTFLHeader from "../htflheaderlogo/index"

// Images
import templetop from "assets/images/pages/temple-top.svg"


const Emailsent = () => {

  return (
    <>
    <div className="header">
        <HTFLHeader/>
      </div>
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
              <h2 className="brand-text text-primary ms-1">Email Sent</h2>
            </Link>
            {/* <CardTitle tag='h2' className='fw-bolder mb-1'>
              Verify your email ✉️
            </CardTitle> */}
            <CardText className='mb-2 text-center text-white'>
              We've sent a link to your Registered email address: <span className='fw-bolder'></span>with a link to reset your password.
            </CardText>
            <Button block tag={Link} to='/' color='primary'>
              Back to Home Page
            </Button>

            {/* <p className="text-center mt-2">
              <span className="me-25 text-white">Didn't receive an email?</span>
              <Link to="/forget-password">
                <span>Resend</span>
              </Link>
            </p> */}

            
          </CardBody>
        </Card>
      </div>
    </div>
    
    </>
  )
}

export default Emailsent