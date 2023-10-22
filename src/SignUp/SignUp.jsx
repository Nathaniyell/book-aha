import React, { useRef, useState } from "react";
import {BsGithub} from 'react-icons/bs'
import {FcGoogle} from "react-icons/fc"
import {BsFillPersonFill} from "react-icons/bs"
import {AiFillEye} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {HiLockOpen} from "react-icons/hi"
import {AiFillEyeInvisible} from "react-icons/ai"


const SignUp = () => {
    const [password, setPassword] = useState({
        isVisible: false,
        isStrong: null,
      });
      const passwordInputRef = useRef();
    
      const passwordIsVisibleHandler = () => {
        setPassword((prevState) => ({
          ...prevState,
          isVisible: !prevState.isVisible,
        }));
      };
    
      const checkPasswordStrength = (value) => {
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
    
        return value.length > 6 && hasUppercase && hasLowercase && hasNumber;
      };
    
      const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        const isStrong = checkPasswordStrength(passwordValue);
        setPassword((prevState) => ({
          ...prevState,
          isStrong: isStrong,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check the password strength one more time before submitting
        const passwordValue = passwordInputRef.current.value;
        const isStrong = checkPasswordStrength(passwordValue);
    
        if (isStrong) {
            setPassword((prevState) => ({
                ...prevState,
                isStrong: true,
              }));
          console.log("Form submitted");
        } else {
            setPassword((prevState) => ({
                ...prevState,
                isStrong: false,
              }));
          console.error("Password is not strong");
        }
      };
    
      
  return (
    <div className="bg-signUp bg-no-repeat bg-cover bg-origin-padding  px-2 pb-48 md:pb-48">
      <div className=" relative top-24">
   
        <div className="p-2 lg:w-1/2 mx-auto">
   
          <div className="bg-white  rounded-t-lg p-4">
    
            <p className="text-center  text-xl font-bold text-gray-600">
              Sign up with
            </p>
            <div>
            
              <div className="flex items-center justify-center space-x-4 mt-6">
        
                <button className="flex items-center w-1/2 justify-between md:w-1/5 lg:w-1/4 py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                 <BsGithub className="text-3xl text-black " />
                  Github
                </button>
                <button className="flex items-center w-1/2 justify-between md:w-1/5 lg:w-1/4 py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                 <FcGoogle className="text-3xl " />
                 Google
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-b-lg py-4 px-4 lg:px-24">
            
            <p className="text-center text-sm text-gray-500 font-light">
              
              Or sign up with credentials
            </p>
            <form className="mt-4" onSubmit={handleSubmit}>
              
              <div className="relative">
                
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition h-10  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="First Name"
                  type="text"
                  required
                  placeholder="First Name"
                />
                <div className="absolute left-0 inset-y-0 flex items-center" >
                  
                 <BsFillPersonFill className="text-gray-400 h-5 w-5 ml-3" />
                </div>
                
              </div>
              <div className="relative mt-3">
                
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition h-10 rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="email"
                  required
                  placeholder="Email"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                                    <MdEmail className="text-gray-400 h-5 w-5 ml-3" />
                </div>
              </div>
              <div className="relative mt-3">
         
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition h-10 rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="password"
                  type={password.isVisible? "text": "password"}
                  placeholder="Password"
                  ref={passwordInputRef}
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
           
                  <HiLockOpen className="text-gray-400 h-5 w-5 ml-3" />
                </div>
                <div className="absolute right-0 inset-y-0 flex items-center cursor-pointer" onClick={passwordIsVisibleHandler} onChange={handlePasswordChange}>
                    {password.isVisible? <AiFillEyeInvisible className="text-gray-400 h-5 w-5 mr-3" />:                   
                    <AiFillEye className="text-gray-400 h-5 w-5 mr-3" />
                }
                </div>
              </div>
              {password.isStrong !== null && <p className="mt-4 italic text-gray-500 font-light text-xs">
                Password strength:
                <span className={`font-bold ${password.isStrong? "text-green-400": "text-red-500"} `}>{password.isStrong ? "Strong" : "Weak (Password length must be greater than 6)"}</span>
              </p>}
              
              <div className="mt-4 flex items-center text-gray-500">
         
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2 h-8"
                />
                <label className="text-sm" htmlFor="remember">
                  I agree with the
                  &nbsp;<span className="text-rose-400 cursor-pointer hover:text-rose-500">
                    Privacy Policy
                  </span>
                </label>
              </div>
              <div className="flex items-center justify-center mt-8">
         
                <button type="submit" className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
           
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
