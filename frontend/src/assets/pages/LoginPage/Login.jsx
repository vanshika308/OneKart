import React from 'react';
import OneKartLogo from "../../pictures/OneKartLogo.jpeg";

import { useNavigate } from 'react-router-dom';import LoginForm from './LoginForm';

function Login() {

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
       <LoginForm/>      
    </div>
  )
}

export default Login;