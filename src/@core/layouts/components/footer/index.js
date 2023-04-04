// ** Icons Import
import React from 'react'
import { Link } from 'react-router-dom'
// ** Icons Import
import { Heart } from 'react-feather'

// image
import Paymenticons from "assets/images/pages/payment-icons.png"
import FooterFrame from "assets/images/pages/Footer-Frame.png"

const Footer = () => {
  return (
    <>
    <div className='footer-page'>
        <div className='container-xxl'>
            <div className='footer-top'>
                <img src={FooterFrame} />
            </div>
            <div className='container-xxl'>
            <div className='row'>
                <div className='col-md-4'>
                    <h5>HINDU TEMPLE OF FLORIDA - MISSION</h5>
                    <p>Our mission is to honor and preserve our Hindu heritage, cultivate a sense of responsibility and community within our congregation, and create a welcoming and familial atmosphere for all members.</p>
                    <h5>Follow us on</h5>
                </div>
                <div className='col-md-2'>
                    <h5>Quick Links</h5>
                    <div className='footer-links'>
                    <ul>
                    <Link className='text-black' to="/">About Us</Link>
                    <Link className='text-black' to="/">Contact Us</Link>
                    <Link className='text-black' to="/">Terms & Conditions</Link>
                    <Link className='text-black' to="/">Privacy policy</Link>
                    </ul>
                    </div>
                </div>
                <div className='col-md-2'>
                    <h5>Connect</h5>
                    <div className='footer-links'>
                    <ul>
                    <Link className='text-black' to="/">Staff</Link>
                    <Link className='text-black' to="/">Management</Link>
                    <Link className='text-black' to="/">Reports</Link>
                    {/* <Link className='text-black' to="/">Privacy policy</Link> */}
                    </ul>
                    </div>
                </div>
                <div className='col-md-4'>
                    <h5>Sign Up for Temple Newsletter</h5>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className='footer-copy'>
        <div className='content-wrapper container-xxl'>
            <div className='row'>
                <div className="col-lg-6">
                    <p className='text-white'>© 2014 Hindu Temple of Florida, Tampa.      |   <Link className='text-white' to="/">Privacy policy</Link></p>
                </div>
                <div className='col-lg-6'>
                <div className='copy-payment d-flex justify-content-end'>
                    <img src={Paymenticons} />
                   
                </div>
                </div>
            </div>
        </div>
    </div>
    <p className='clearfix mb-0'>
      {/* <span className='float-md-start d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://www.google.com/' target='_blank' rel='noopener noreferrer'>
          Demo
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
        Heart
        <Heart size={14} />
      </span> */}
    </p>
    </>
   
  )
}

export default Footer
