import React from 'react'
import AppButton from '@components/Buttons'
import MainNav from "./mainnavbar"


const index = () => {
  return (
    <>
    <div className='top-bar'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-5 justify-content-end top-right-content'>
                    <p><b>Dress code for 12yrs and above:</b><br/>
                        Dress modestly, cover shoulders and knees (no shorts)</p>
                </div>
                <div className='row col-md-7 justify-content-end top-right-content'>
                    <div className='col-md-9'>
                    <p><b>Weekdays:</b> 9:30 am to 11:30 am / 6:00 pm to 9:00 pm<br/>
                    <b>Weekends:</b> 9:30 am – 9:00 pm</p>
                    </div>
                    <div className='col-md-3'>
                        <AppButton
                        color="primary"
                        block
                        isSubmit
                        type="fill"
                        // disabled={isSubmit}
                        // spinner={isSubmit}
                        spinnerType="border"
                        >
                        Donate
                        </AppButton>
                    </div>
                </div>     
            </div>
        </div>
    </div>
    <div className='main-navigation'>
        <MainNav />
    </div>
    </>
  )
}

export default index