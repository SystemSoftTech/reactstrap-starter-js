
import React from 'react'

// logo
import HTFLlogo from "assets/images/logo/HTFLlogo.png"

const mainnavbar = () => {
  return (
    <>
    <div className='main-nav'>
        <div className='container'>
        <div className='main-nav-logo'>
            <img src={HTFLlogo}  />
        </div>
        </div>
    </div>
    </>
  )
}

export default mainnavbar