import React, { useRef, useState } from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import {BsGithub} from 'react-icons/bs'
import {FcGoogle} from "react-icons/fc"
import {BsFillPersonFill} from "react-icons/bs"
import {AiFillEye} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {HiLockOpen} from "react-icons/hi"
import {AiFillEyeInvisible} from "react-icons/ai"


const About = () => {
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
      const passwordIsStrongHandler = () => {
        const passwordValue = passwordInputRef.current.value;
        
        const hasUppercase = /[A-Z]/.test(passwordValue);
        const hasLowercase = /[a-z]/.test(passwordValue);
        const hasNumber = /[0-9]/.test(passwordValue);
          
        if (passwordValue.length > 6 && hasUppercase && hasLowercase && hasNumber) {
          setPassword((prevState) => ({
            ...prevState,
            isStrong: true,
          }));
        }
      }
      
  return (
    <div className="bg-signUp bg-contain bg-center w-full px-4">
      <div class=" relative top-24">
   
        <div class="p-4 lg:w-1/2 mx-auto">
   
          <div class="bg-white rounded-t-lg p-4">
    
            <p class="text-center text-sm text-gray-600 font-light">
              Sign up with
            </p>
            <div>
            
              <div class="flex items-center justify-center space-x-4 mt-3">
        
                <button class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                 <BsGithub className="text-3xl text-black mr-4" />
                  Github
                </button>
                <button class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                 <FcGoogle className="text-3xl mr-4" />
                  Google
                </button>
              </div>
            </div>
          </div>
          <div class="bg-gray-100 rounded-b-lg py-4 px-4 lg:px-24">
            
            <p class="text-center text-sm text-gray-500 font-light">
              
              Or sign up with credentials
            </p>
            <form class="mt-4">
              
              <div class="relative">
                
                <input
                  class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="First Name"
                  type="text"
                  placeholder="First Name"
                />
                <div class="absolute left-0 inset-y-0 flex items-center" >
                  
                 <BsFillPersonFill className="text-gray-400 h-5 w-5 ml-3" />
                </div>
                
              </div>
              <div class="relative mt-3">
                
                <input
                  class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <div class="absolute left-0 inset-y-0 flex items-center">
                                    <MdEmail className="text-gray-400 h-5 w-5 ml-3" />
                </div>
              </div>
              <div class="relative mt-3">
         
                <input
                  class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="password"
                  type={passwordIsVisible? "text": "password"}
                  placeholder="Password"
                  ref={passwordInputRef}
                />
                <div class="absolute left-0 inset-y-0 flex items-center">
           
                  <HiLockOpen className="text-gray-400 h-5 w-5 ml-3" />
                </div>
                <div className="absolute right-0 inset-y-0 flex items-center cursor-pointer" onClick={passwordIsVisibleHandler}>
                    {passwordIsVisible? <AiFillEyeInvisible className="text-gray-400 h-5 w-5 mr-3" />:                   
                    <AiFillEye className="text-gray-400 h-5 w-5 mr-3" />
                }
                </div>
              </div>
              <p class="mt-4 italic text-gray-500 font-light text-xs">
                Password strength:
                <span class="font-bold text-green-400">strong</span>
              </p>
              <div class="mt-4 flex items-center text-gray-500">
         
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  class="mr-2"
                />{" "}
                <label class="text-sm" for="remember">
                  I agree with the
                  <a class="text-indigo-400 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <div class="flex items-center justify-center mt-8">
         
                <button class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
           
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

export default About;
