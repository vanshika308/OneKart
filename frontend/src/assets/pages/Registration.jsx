import React from 'react';
import OneKartLogo from "../OneKartLogo.jpeg";
import googleLogo from "../google.png";
import { useNavigate } from 'react-router-dom';

function Registration() {

    let navigate = useNavigate();

  return (
    <div className='w-screen h-screen bg-linear-to-b from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start' >
       <div className='w-full h-20 flex  items-center justify-start px-7.5 gap-2.5 cursor-pointer' onClick={()=>navigate("/")}>
        <img className='w-10' src={OneKartLogo} alt="" />
        <h1 className='text-[22px]'>OneKart</h1>
       </div>
       <div className='w-full h-25 flex items-center justify-center flex-col gap-2.5'>
         <span className='text-[25px] font-semibold'>Registration Page</span>
         <span className='text-[16px]'>Welcome to OneKart, Place your order</span>
       </div>
       <div className='max-w-150 w-[90%] h-125 bg-[#00000025] border border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
        <form action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-5'>
        <div className='w-[90%] h-12.5 bg-[#42656cae] rounded-lg flex items-center justify-center gap-2.5 py-5 cursor-pointer'>
<img src={googleLogo} alt="" className='w-5' />Registration with Google
        </div>
        <div className='w-full h-5 flex items-center justify-center gap-2.5'>
          <div className='w-[40%] h-px bg-[#96969635]'></div> OR
          <div className='w-[40%] h-px bg-[#96969635]'></div>
        </div>
       </form>
       </div>
       
    </div>
  )
}

export default Registration;