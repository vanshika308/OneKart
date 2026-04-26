import React, { useContext } from 'react';
import googleLogo from "../../pictures/google.png";
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { useState } from 'react';
import { authDataContext } from '../../../context/authContext';
import axios from "axios";

function LoginForm() {

  let[show, setShow] = useState(false);
  let[email, setEmail] = useState("");
  let[password, setPassword] = useState("");
  let {serverUrl} = useContext(authDataContext);

  let navigate = useNavigate();

  const handleLogin = async (e) =>{
    e.preventDefault();
     try{
      let result = await axios.post(serverUrl + '/api/auth/login',{
        email,password
      },{withCredentials:true})
      console.log(result.data)
    }catch(error){
      console.log(error.result.data)
    }
  }
   

  return (
    <div className='max-w-150 w-[90%] h-125 bg-[#00000025] border border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
      <form action="" onSubmit={handleLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-5'>
        <div className='w-[90%] h-12.5 bg-[#42656cae] rounded-lg flex items-center justify-center gap-2.5 py-5 cursor-pointer'>
          <img src={googleLogo} alt="" className='w-5' />Registration with Google
        </div>
        <div className='w-full h-5 flex items-center justify-center gap-2.5'>
          <div className='w-[40%] h-px bg-[#96969635]'></div> OR
          <div className='w-[40%] h-px bg-[#96969635]'></div>
        </div>
        <div className='w-[90%] h-100 flex flex-col items-center justify-center gap-3.75 relative'>
           <input type="text" className='w-full h-12.5 border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type={show? "text": "password"} className='w-full h-12.5 border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
            {show &&<IoEyeSharp className='w-5 h-5 cursor-pointer absolute right-[5%] bottom-[56%]' onClick={()=>setShow(prev=> !prev)}/>}
            {!show && <FiEye className='w-5 h-5 cursor-pointer absolute right-[5%] bottom-[56%]' onClick={()=>setShow(prev=> !prev)} /> }
            <button className=' w-full h-12.5 bg-[#6060f5] rounded-lg flex items-center justify-center mt-5 text-[17px] font-semibold'>Login</button>
            <p className='flex gap-2.5'>Do not have any account?<span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={()=>navigate("/signup")}>Create New Account</span></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;