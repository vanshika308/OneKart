import React from 'react';
import googleLogo from "../../pictures/google.png";
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";

function RegistrationForm() {

  let navigate = useNavigate();

  return (
    <div className='max-w-150 w-[90%] h-125 bg-[#00000025] border border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
      <form action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-5'>
        <div className='w-[90%] h-12.5 bg-[#42656cae] rounded-lg flex items-center justify-center gap-2.5 py-5 cursor-pointer'>
          <img src={googleLogo} alt="" className='w-5' />Registration with Google
        </div>
        <div className='w-full h-5 flex items-center justify-center gap-2.5'>
          <div className='w-[40%] h-px bg-[#96969635]'></div> OR
          <div className='w-[40%] h-px bg-[#96969635]'></div>
        </div>
        <div className='w-[90%] h-100 flex flex-col items-center justify-center gap-3.75'>
          <input type="text" className='w-full h-12.5 border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold' placeholder='UserName' required/>
           <input type="text" className='w-full h-12.5 border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold' placeholder='Email' required/>
            <input type="password" className='w-full h-12.5 border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold' placeholder='Password' required/>
            <IoEyeSharp className='w-5 h-5 cursor-pointer absolute'/>
            <button className=' w-full h-12.5 bg-[#6060f5] rounded-lg flex items-center justify-center mt-5 text-[17px] font-semibold'>Create Account</button>
            <p className='flex gap-2.5'>Do you have any account?<span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={()=>navigate("/login")}>Login</span></p>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm;