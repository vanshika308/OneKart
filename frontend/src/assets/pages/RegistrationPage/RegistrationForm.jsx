import React, { useContext } from 'react';
import googleLogo from "../../pictures/google.png";
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { useState } from 'react';
import { authDataContext } from '../../../context/authContext';
import axios from "axios";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../../utils/Firebase';

function RegistrationForm() {

  let[show, setShow] = useState(false);
  let{serverUrl} = useContext(authDataContext);
  let[name,setName] = useState("");
  let[email,setEmail] = useState("");
  let[password,setPassword] = useState("");

  let navigate = useNavigate();

  const handleSignup = async(e) => {
    e.preventDefault();
    try {
      const result = await axios.post(serverUrl + '/api/auth/registration',{
        name,email,password
      },{withCredentials:true})
      console.log(result.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const googleSignup = async () => {
        try {
            const response = await signInWithPopup(auth , provider)
            let user = response.user
            let name = user.displayName;
            let email = user.email

            const result = await axios.post(serverUrl + "/api/auth/googlelogin" ,{name , email} , {withCredentials:true})
            console.log(result.data)
            //toast.success("User Registration Successful")

        } catch (error) {
            console.log(error.message)
            //toast.error("User Registration Failed")
        }
        
    }

  return (
    <div className='max-w-150 w-[90%] h-125 bg-[#00000025] border border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
      <form action="" onSubmit={handleSignup} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-5'>
        <div className='w-[90%] h-12.5 bg-[#42656cae] rounded-lg flex items-center justify-center gap-2.5 py-5 cursor-pointer' onClick={googleSignup}>
          <img src={googleLogo} alt="" className='w-5' />Registration with Google
        </div>
        <div className='w-full h-5 flex items-center justify-center gap-2.5'>
          <div className='w-[40%] h-px bg-[#96969635]'></div> OR
          <div className='w-[40%] h-px bg-[#96969635]'></div>
        </div>
        <div className='w-[90%] h-100 flex flex-col items-center justify-center gap-3.75 relative'>
          <input type="text" className='w-full h-12.5 border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold' placeholder='UserName' required onChange={(e)=>setName(e.target.value)} value={name}/>
           <input type="text" className='w-full h-12.5 border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type={show? "text": "password"} className='w-full h-12.5 border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
            {show &&<IoEyeSharp className='w-5 h-5 cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev=> !prev)}/>}
            {!show && <FiEye className='w-5 h-5 cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev=> !prev)} /> }
            <button className=' w-full h-12.5 bg-[#6060f5] rounded-lg flex items-center justify-center mt-5 text-[17px] font-semibold cursor-pointer'>Create Account</button>
            <p className='flex gap-2.5'>Do you have any account?<span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={()=>navigate("/login")}>Login</span></p>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm;