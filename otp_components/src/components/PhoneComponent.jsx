import React, { useState } from 'react'
import OtpComponent from './OtpComponent'

const PhoneComponent = () => {
  const handlePhn =(event)=>{
    setPhn(event.target.value)
  }
  const handlePhnSubmit =(event)=>{
    event.preventDefault()
    setOtp(true)
  }
  const onOtpSubmit =()=>{

  }
  const [phnNumber , setPhn] = useState()
  const [Otp , setOtp] = useState(false)
  return (
    <>
    <div>PhoneComponent</div>
{   !Otp? <div  className='form'>
       <form onSubmit={handlePhnSubmit}>

        <input type="text"
        value={phnNumber}
        onChange={handlePhn}
        placeholder='Enter the phone number'
        />
        <button type='submit'> Submit</button>
        </form>
    </div> :
    <div>
      <h3>Please enter your OTP to verify your mobile number: {phnNumber} </h3>
      <OtpComponent length={4} onOtpSubmit ={onOtpSubmit}/>
    </div>
    }
    </>
  )
}

export default PhoneComponent