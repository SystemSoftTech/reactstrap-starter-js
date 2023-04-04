// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

// Header
import HTFLHeader from "../htflheaderlogo/index"

// Images
import templetop from "assets/images/pages/temple-top.svg"


const ConformRegister = () => {
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
              <h2 className="brand-text text-primary ms-1">Congratulations!</h2>
            </Link>
            {/* <CardTitle tag='h2' className='fw-bolder mb-1'>
              Verify your email ✉️
            </CardTitle> */}
            <CardText className='mb-2 text-center text-white'>
            Your account has been successfully created. Please check your email and follow the instructions to verify your account. 
             
            </CardText>
            

            <p className="text-center mt-2">
              <span className="me-25 text-white">
You will be redirected to a Home page in 5 seconds</span>
              
            </p>

            
          </CardBody>
        </Card>
      </div>
    </div>
    
    </>
  )
}

export default ConformRegister
