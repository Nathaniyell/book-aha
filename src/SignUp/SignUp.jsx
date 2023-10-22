import React, { useEffect,useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiLockOpen } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    checked: false,
  };
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState(initialValues);
  const [password, setPassword] = useState({
    isVisible: false,
    isStrong: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const passwordIsVisibleHandler = () => {
    setPassword((prevState) => ({
      ...prevState,
      isVisible: !prevState.isVisible,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((previousFormValues) => {
      return {
        ...previousFormValues,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      console.log(formErrors);
    }
  }, [formErrors]);

  const sendLoginDetails = async(taskText)=>{
    fetch('https://fetchmovies-udemy-default-rtdb.firebaseio.com/tasks.json',{
          
    method: "POST",
    body: {text:taskText} ,
    headers: {
      'Content-Type': 'application/json',
    }
  })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = formValidate(formData)
    setFormErrors(errors);
    setIsSubmitted(true);
console.log(formData)
sendLoginDetails(formData)
    setFormData({
      firstName: "",
      email: "",
      password: "",
      checked: false,
    });
    setPassword((prevState) => ({
      ...prevState,
      isStrong: null,
    }));
  };
  const formValidate = (values) => {
    const errors = {};
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }else if(!passwordPattern.test(values.password)){
      errors.password = "Password must contain capital and small letters together with a number"
    }else if (values.password.length < 6){
     errors.password = "Password must be at least 6 characters long"
    }else {
      setPassword((prevState) => ({
        ...prevState,
        isStrong: true,
      }));
    }
    return errors;
  };

  return (
    <div className="bg-signUp bg-no-repeat bg-cover bg-origin-padding  px-2 pb-48 md:pb-48">
      <div className=" relative top-24">
        {isSubmitted && <p className="bg-white text-center uppercase p-4 w-1/2 mx-auto text-green-600"></p>}
        <div className="p-2 lg:w-1/2 mx-auto">
          <div className="bg-white  rounded-t-lg p-4">
            <p className="text-center  text-xl font-bold text-gray-600">
              Sign up with
            </p>
            {JSON.stringify(formData)}
            <div>
              <div className="flex items-center justify-center space-x-4 mt-6 w-[80%] mx-auto">
                <button className="flex items-center justify-between sm:w-1/4 md:w-1/5 lg:w-1/4 py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  <BsGithub className="text-2xl text-black " />
                  Github
                </button>
                <button className="flex items-center justify-between sm:w-1/4 md:w-1/5 lg:w-1/4 py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  <FcGoogle className="text-2xl " />
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
                  name="firstName"
                  type="text"
                  //required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <BsFillPersonFill className="text-gray-400 h-5 w-5 ml-3" />
                </div>
              </div>
                <p className="text-red-600 text-sm">{formErrors.firstName}</p>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition h-10 rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  // required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <MdEmail className="text-gray-400 h-5 w-5 ml-3" />
                </div>
              </div>
                <p className="text-red-600 text-sm">{formErrors.email}</p>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition h-10 rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="password"
                  name="password"
                  type={password.isVisible ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <HiLockOpen className="text-gray-400 h-5 w-5 ml-3" />
                </div>
                
                <div
                  className="absolute right-0 inset-y-0 flex items-center cursor-pointer"
                  onClick={passwordIsVisibleHandler}
                >
                  {password.isVisible ? (
                    <AiFillEyeInvisible className="text-gray-400 h-5 w-5 mr-3" />
                  ) : (
                    <AiFillEye className="text-gray-400 h-5 w-5 mr-3" />
                  )}
                </div>
              </div><p>
                {formErrors.password}</p>
              {password.isStrong !== null && (
                <p className="mt-4 italic text-gray-500 font-light text-xs">
                  Password strength:
                  <span
                    className={`font-bold ${
                      password.isStrong ? "text-green-400" : "text-red-500"
                    } `}
                  >
                    {password.isStrong
                      ? "Strong"
                      : `${<p className="text-red-600 text-sm">{formErrors.password}</p>}`}
                  </span>
                </p>
              )}

              <div className="mt-4 flex items-center text-gray-500">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checked"
                  className="mr-2 h-8"
                  checked={formData.checked}
                  onChange={handleChange}
                />
                <label className="text-sm" htmlFor="checkbox">
                  I agree with the &nbsp;
                  <span className="text-rose-400 cursor-pointer hover:text-rose-500">
                    Privacy Policy
                  </span>
                </label>
              </div>
              <div className="flex items-center justify-center mt-8">
                <button
                  type="submit"
                  className="text-black py-2 px-4 uppercase rounded bg-white hover:bg-black hover:text-white shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
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
