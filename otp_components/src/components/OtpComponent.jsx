import React, { useState } from 'react'

const OtpComponent = ({length , onOtpSubmit}) => {
    const [otp , setOtp] = useState(new Array(length).fill(""))
    const handleChange = (()=>{})
  return (
    <div >
        {otp.map((val ,i)=>(
            <input 
            key = {i}
            type='text'
            value={val}
            onChange={(e)=> handleChange(index , e)} className='otp'
            />
        ))}
    </div>
  )
}

export default OtpComponent